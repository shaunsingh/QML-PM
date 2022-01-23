import React from "react";
import "../styles/settings.css";
import "../styles/logout.css";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";

function Settings({ setIsAuth }) {
  let navigate = useNavigate();
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };

  return (
    <div id="content">
      <div class="grid grid--margin">
        <div class="form">
          <div class="form-panel one">
            <div class="form-header">
              <h1> User Sign Out</h1>
            </div>
            <div class="form-content">
              <div className="loginPage">
                <link
                  rel="stylesheet"
                  type="text/css"
                  href="//fonts.googleapis.com/css?family=Open+Sans"
                />
                <div class="google-btnOUT" onClick={signUserOut}>
                  <div class="google-icon-wrapper">
                    <img
                      class="google-icon"
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    />
                  </div>
                  <p class="btn-textOUT">
                    <b>Sign Out</b>
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

export default Settings;
