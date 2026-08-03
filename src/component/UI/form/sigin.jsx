import { useState } from "react";
import Button from "../Button/Button";
import Input from "../input/input";
import { signup } from "../../js_functions/login";
import { useNavigate } from "react-router-dom";
import "./login_form.css";
function Signin_Form({ onClick}) {
  const [name , setName] = useState('')
  const [email , setemail] = useState('')
  const [password , setpassword] = useState('')
  const navigate = useNavigate();
  
   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await signup(name , email, password);
      console.log(data.message);
      navigate("/");
    } catch (err) {
      console.error(err.message);
    }
  };
  

  

  return (
    <form onSubmit={handleSubmit}>
      <div className="top">
        <h1>Sign In</h1>
        <div className="social_login">
          <div className="facebook"></div>
          <div className="google"></div>
          <div className="linkdin"></div>
        </div>
        <p>or use your Email for registration</p>

        <div className="input_cantainer">
          <Input placeHolder={"Enter your Full Name"} type="text" id='name' value={name}
            onChange={(e) => setName(e.target.value)}/>
          <Input placeHolder={"Enter your email"} type="text" id='email' value={email}
            onChange={(e) => setemail(e.target.value)}/>
          <Input placeHolder={"Enter your Pasword"} type="password" id='password' value={password}
            onChange={(e) => setpassword(e.target.value)}/>
        </div>
      </div>
      {/* <Input placeHolder={'Enter your email'}/> */}
      <div>
        <Button text=" Signin"  type="submit" />
        <Button text="login " onClick={onClick} type="button" />
      </div>
    </form>
  );
}

export default Signin_Form;
