import Login_form from "../component/UI/form/Login_form";
import Signin_Form from "../component/UI/form/sigin";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { useState } from "react";



export function Login_page() {
  
  const [move, setMove] = useState(false);
  console.log(move);

  return (
    <div className="login-page">
      <div className="formCantaner">
        <div className={`hidder ${move ? "active" : ""}`}>
          {move ? (
            <>
              <h1>Welcome Back</h1>
              <p>
                Stay connected by logging in with your credentials and continue
                your experience.
              </p>
            </>
          ) : (
            <>
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start your journey with us.</p>
            </>
          )}
        </div>

        <Login_form  onClick={() => {
            console.log("login in clicked");
            setMove(false);
        }} />
        <Signin_Form  onClick={() => {
    console.log("Sign in clicked");
    setMove(true);
    }} />
      </div>
    </div>
  );
}

export default Login_page;
