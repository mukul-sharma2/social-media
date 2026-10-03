from flask import Flask, request, jsonify, current_app , g
from flask_cors import CORS
from pymongo import MongoClient
import datetime
import jwt
from bson import ObjectId, objectid
# from streamlit import user
from app.Auth.login_required import login_required
import os
import uuid




app = Flask(__name__)
CORS(app)
client = MongoClient("mongodb://localhost:27017/")
db = client["mydatabase"]
collection = db["users"]
posts = db['posts']
UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
 
app.config["SECRET_KEY"] = "your_super_secret_key"
try:
    client.server_info()
    print("MongoDB connected")
except Exception as e:
    print(e)

@app.route("/")
def home():
    return "Hello, World!"

@app.route('/api/auth/signup' , methods=['POST'])
def signup():
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    password = data.get("password")
    if collection.find_one({'email': email}) :
        return jsonify(
            {
                'success': False,
                "message": "Email already exists"
                
            }
        ),400
    collection.insert_one(
        {'name':name,
            'email':email,
            'password':password}
        )
    
    payload = {
        "email": email,
        "name": name,
        "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=2)
    }
    
    token = jwt.encode(payload, current_app.config["SECRET_KEY"], algorithm="HS256")    
        
        
    print(name , email , password)
    
    return jsonify({
        "success": True,
        "message": f"{name} ,User registered successfully",
        "token": token
    }), 201
    
    
from flask import send_from_directory

UPLOAD_FOLDER = "uploads"

@app.route("/uploads/<filename>")
def uploaded_file(filename):
    return send_from_directory(UPLOAD_FOLDER, filename)
    
@app.route('/api/auth/login' , methods=['POST'])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")
    user = collection.find_one({
        "email": email,
        "password": password
    })

    if not user:
        return jsonify({
         "success": False,
            "message": "Invalid email or password"
    }), 401
    
        
        
    print( email , password)
    payload = {
    "email": user["email"],
    "name": user["name"],
    "user_id": str(user["_id"]),
    "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=2)
}

    token = jwt.encode(payload, current_app.config["SECRET_KEY"], algorithm="HS256")
    
    return jsonify({
        "success": True,
        "message": f"{email} ,User Logdin successfully",
        "token" : token
    }), 200
    

@app.route('/api/add_post', methods=['POST'])
@login_required(requires_auth=True)
def add_post():

    data = request.form
    


    title = data.get("title")
    description = data.get("description")
    file = request.files.get("file")
    filename = uuid.uuid4().hex + os.path.splitext(file.filename)[1] if file else None
    if file:    
        file.save(os.path.join(UPLOAD_FOLDER, filename))
        
    
    

   

   
    user_id = g.user["user_id"]
    posts.insert_one({
        "user_id": user_id,
        "title": title,
        "description": description or None,
        "image": filename,
        "created_at": datetime.datetime.utcnow()
        
})

    return jsonify({
        "message": "Post received successfully",
        "title": title,
        "description": description,
        "image": filename
    }), 200
    
@app.route('/api/my_posts', methods=['GET'])
@login_required(requires_auth=True)
def get_posts():
    user_id = g.user["user_id"]
    try:
        user_posts = list(posts.find({"user_id": user_id}))

        for post in user_posts:
                post["_id"] = str(post["_id"])
                if post.get("image"):
                    post["image"] = f"{request.host_url}uploads/{post['image']}"
        return jsonify({
            "success": True,
            "posts": user_posts
        }), 200

    except Exception as e:
        return jsonify({
            "success": False,
            "message": str(e)
    }), 500
   
@app.route('/api/feed', methods=['GET'])
@login_required(requires_auth=False)
def feed():
    try:
        all_posts = list(posts.find().sort("created_at", -1))
        

        for post in all_posts:
            post["_id"] = str(post["_id"])
            user = collection.find_one({"_id": ObjectId(post["user_id"])})

            post["username"] = user["name"] if user else "Unknown"
            if post.get("image"):
                post["image"] = f"{request.host_url}uploads/{post['image']}"

        return jsonify({
            "success": True,
            "posts": all_posts
        }), 200

    except Exception as e:
        return jsonify({
            "success": False,
            "message": str(e)
    }), 500
    
@app.route('/api/get_user' , methods = ['GET'])
@login_required()
def get_user():
    
   return jsonify(g.user), 200
if __name__ == "__main__":
    app.run(debug=True)