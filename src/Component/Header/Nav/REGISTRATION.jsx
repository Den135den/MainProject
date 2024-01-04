import React from "react";
import './R.css';
import { useState } from "react";


export default function REGISTRATION() {

const [inputState, SetInputState] = useState({
    username: '',
    email:'',
    password: '',
    confirmPassword:''
})


function onChange(e){
   SetInputState({
     ...inputState,
     [e.target.name]:e.target.value
   });
}


function register(){

   fetch('http://localhost:5000/registerBody', {
      method:'POST',
      headers:{
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: inputState.username,
        email: inputState.email,
        password: inputState.password,
        confirmPassword: inputState.confirmPassword,
        
      })
   })
   .then((response) => response.json())
   .then((response) => console.log(response))
   .catch((error) => {
    console.log('Error:', error);
  });
}




    return React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            { className: "widthForm" },
            React.createElement(
                "div",
                { id: "login-box" },
                React.createElement(
                    "div",
                    { className: "left" },
                    React.createElement("h1", { className: "registrationText" }, "Register"),
                    React.createElement("input", { type: "text", name: "username", placeholder: "Username", className: "inputUserName", value:inputState.username, onChange:onChange}),
                    React.createElement("input", { type: "text", name: "email", placeholder: "E-mail", className: "inputUserName", value:inputState.email, onChange:onChange }),
                    React.createElement("input", { type: "password", name: "password", placeholder: "Password", className: "inputPassword", value:inputState.password, onChange:onChange}),
                    React.createElement("input", { type: "password", name: "confirmPassword", placeholder: "Retype password", className: "inputPassword", value:inputState.confirmPassword, onChange:onChange}),
                    React.createElement("button", {className: "inputSubmit", onClick:register}, "Sign me up")
                ),
                React.createElement(
                    "div",
                    { className: "right" },
                    React.createElement("span", { className: "loginwith" }, "Sign in with", React.createElement("br", null), "social network"),
                    React.createElement("button", {href:'https://www.instagram.com/new__sportlife/', className: "social-signin facebook" }, "Log in with facebook"),
                    React.createElement("button", { className: "social-signin twitter" }, "Log in with Twitter"),
                    React.createElement("button", { className: "social-signin google" }, "Log in with Google+")
                ),
                React.createElement("div", { className: "or" }, "OR")
            )
        )
    );
}   