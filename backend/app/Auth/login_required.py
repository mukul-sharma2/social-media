from functools import wraps
from flask import request, jsonify, current_app, g
import jwt

def login_required(requires_auth=True):
    def decorator(f):
        @wraps(f)
        def decorated(*args, **kwargs):
            g.user = None
            auth_header = request.headers.get("Authorization")
            
            if auth_header and auth_header.startswith("Bearer "):
                token = auth_header.split(" ")[1]
                try:
                        payload = jwt.decode(token, current_app.config["SECRET_KEY"], algorithms=["HS256"])
                        g.user = payload
                        print("User authenticated:", g.user)
                except (jwt.ExpiredSignatureError, jwt.InvalidTokenError):
                        if requires_auth:
                                        return jsonify({
                                            "success": False,
                                            "message": "Invalid or expired token"
                                        }), 401
                                        
                        
            elif requires_auth:
                return jsonify({
                    "success": False,
                    "message": "Authorization header missing"
                }), 401
            
        
        
        
            
        
        
            return f(*args, **kwargs)
        return decorated
    
    return decorator
