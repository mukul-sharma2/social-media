import Button from "../Button/Button";
import Input from "../input/input";
import "./login_form.css";
import { useState } from "react";
import { login } from "../../js_functions/login";
import { useNavigate } from "react-router-dom";
function Login_Form({ onClick }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await login(email, password);
      console.log(data.message);
      navigate("/");
    } catch (err) {
      console.error(err.message);
    }finally {
        setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="top">
        <h1 style={{ color: "black" , margin: "0 0 20px 0" }}>Welcome Back</h1>
        <div className="input_cantainer">
          <Input
            placeHolder={"Enter your email"}
            type="text"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <Input placeHolder={"Enter your Pasword"} type="password" 
          value={password}
            onChange={(e) => setpassword(e.target.value)}/>
        </div>
      </div>
      {/* <Input placeHolder={'Enter your email'}/> */}
      <div className="btn_cantaner">
        <Button text=" Signin" onClick={onClick} type="button" />
        <Button text=" Login " type="Submit" />
      </div>
    </form>
  );
}

export default Login_Form;
