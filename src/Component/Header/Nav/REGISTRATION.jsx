import React from "react";
import './R.css';

export default function REGISTRATION() {
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
                    React.createElement("h1", { className: "registrationText" }, "Sign up"),
                    React.createElement("input", { type: "text", name: "username", placeholder: "Username", className: "inputUserName" }),
                    React.createElement("input", { type: "text", name: "email", placeholder: "E-mail", className: "inputUserName" }),
                    React.createElement("input", { type: "password", name: "password", placeholder: "Password", className: "inputPassword" }),
                    React.createElement("input", { type: "password", name: "password2", placeholder: "Retype password", className: "inputPassword" }),
                    React.createElement("input", { type: "submit", name: "signup_submit", value: "Sign me up", className: "inputSubmit" })
                ),
                React.createElement(
                    "div",
                    { className: "right" },
                    React.createElement("span", { className: "loginwith" }, "Sign in with", React.createElement("br", null), "social network"),
                    React.createElement("button", { className: "social-signin facebook" }, "Log in with facebook"),
                    React.createElement("button", { className: "social-signin twitter" }, "Log in with Twitter"),
                    React.createElement("button", { className: "social-signin google" }, "Log in with Google+")
                ),
                React.createElement("div", { className: "or" }, "OR")
            )
        )
    );
}   