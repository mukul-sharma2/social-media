import "./create.css";
import Button from "../../component/UI/button/Button";
import Input from "../../component/UI/input/input";
import { useState } from "react";

function CreatePost({ onClose ,user}) {

  const [title , setTtile] = useState('')
  const [Discription , setDiscription] = useState('')
  const [file , setFile] = useState(null)
  

  async function add_post(title, description, file, token) {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('file', file);
    if (!file) {

  alert("Please select a file");
  return;
}
  try {
    const response = await fetch("http://localhost:5000/api/add_post", {
      method: "POST",
      headers: {
         Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      console.log(response.status)
      throw new Error(`HTTP ${response.status}`);
    }
    console.log(response);
console.log(response.status);
console.log(response.ok);

const data = await response.json();
console.log(data);

   
    return data; 
  } catch (err) {
    console.error(err);
    throw err;
  }
}

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await add_post(title, Discription, file, localStorage.getItem('token'));
      console.log(data.message);
      onClose();
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      <div className="cover" onClick={onClose}></div>

      <form className="CreatePostMenue" onSubmit={handleSubmit}>
        <Button 
          text="X" 
          variant="cross" 
          onClick={onClose}
        />
<h1>Create post</h1>
<p className="username">Mukul Sharma</p>
<p className="placeholder">What's on your mind, Mukul?</p>
<Input type='textarea' value = {title} onChange = {(e)=>setTtile(e.target.value)}/>
<Input type='textarea' value = {Discription} onChange = {(e) => setDiscription(e.target.value)}/>
<input type="file" name="post" id="post" accept="image/*,video/*"
  onChange={(e) => setFile(e.target.files[0])} required/>
<Button text="Post" className="post-btn" type="submit"/>

      </form>
    </>
  );
}

export default CreatePost;
