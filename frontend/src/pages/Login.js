import React from "react";
import "../styles/auth.css";
import "../styles/loginbutton.css";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  let navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", false);
      setIsAuth(true);
      navigate("/dashboard");
    });
  };
  return (
    <div id="content">
      <div class="grid grid--margin">
        <div class="form">
          <div class="form-panel one">
            <div class="form-header">
              <h1>Account Login</h1>
            </div>
            <div class="form-content">
              <div className="loginPage">
                <link
                  rel="stylesheet"
                  type="text/css"
                  href="//fonts.googleapis.com/css?family=Open+Sans"
                />
                <div class="google-btn" onClick={signInWithGoogle}>
                  <div class="google-icon-wrapper">
                    <img
                      class="google-icon"
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    />
                  </div>
                  <p class="btn-text">
                    <b>Sign In With Google</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
