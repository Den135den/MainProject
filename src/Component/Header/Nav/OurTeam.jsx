import React, { Component } from "react";
import style from '../Headers.module.css';
import img from '../../../img/21.jpg';
import img2 from '../../../img/20.jpg';
import img3 from '../../../img/22.jpg';
import { Link } from "react-router-dom";



export default class OurTeam extends Component {
    render() {
        return React.createElement(
            "div",
            { className: style.cardContainer },
            React.createElement(
                "div",
                { className: style.card },
                React.createElement("img", { src: img, alt: "Person 1", className: style.cardImgTop }),
                React.createElement(
                    "div",
                    { className: style.cardBody },
                    React.createElement("h5", { className: style.cardTitle }, "John Doe"),
                    React.createElement(
                        "p",
                        { className: style.cardText },
                        "He is from American, Experienced trainer with 3 years of experience, specializing in the field of sports coaching. Goal oriented and committed to work, excellent communication and interpersonal skills..."
                    ),
                    React.createElement(
                        Link,
                        { to: "/information", className: style.btn2 },
                        "Contact Information"
                    )
                )
            ),
            React.createElement(
                "div",
                { className: style.card },
                React.createElement("img", { src: img2, alt: "Person 2", className: style.cardImgTop }),
                React.createElement(
                    "div",
                    { className: style.cardBody },
                    React.createElement("h5", { className: style.cardTitle }, "Franz Muller"),
                    React.createElement(
                        "p",
                        { className: style.cardText },
                        "He is from Germany. Designed and delivered individual and group trainings. Work with clients of any level, from to professional athletes. Organization and holding of sports trips and training camps..."
                    ),
                    React.createElement(
                        Link,
                        { to: "/information", className: style.btn2 },
                        "Contact Information"
                    )
                )
            ),
            React.createElement(
                "div",
                { className: style.card },
                React.createElement("img", { src: img3, alt: "Person 1", className: style.cardImgTop }),
                React.createElement(
                    "div",
                    { className: style.cardBody },
                    React.createElement("h5", { className: style.cardTitle }, "Barvin Quinn"),
                    React.createElement(
                        "p",
                        { className: style.cardText },
                        "He is from Ireland. Development of individual training programs for clients of all training levels. Conducting individual and group training. Assessing clients' physical fitness and health status.."
                    ),
                    React.createElement(
                        Link,
                        { to: "/information", className: style.btn2 },
                        "Contact Information"
                    )
                )
            )
        );
    }
}







