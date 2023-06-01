import React, { Component } from "react";
import style from '../Headers.module.css';
import img from '../../../img/21.jpg';
import img2 from '../../../img/20.jpg';
import img3 from '../../../img/22.jpg';

export default class IFORMATION extends Component {
    render() {
        return React.createElement(
            "div",
            { style: { display: 'flex', paddingTop: '60px' } },
            React.createElement(
                "div",
                { className: style.card2 },
                React.createElement("h1", { className: style.textTitle2 }, "John Doe"),
                React.createElement("img", { src: img, className: style.cardImg2, alt: "Зображення тренера" }),
                React.createElement(
                    "div",
                    { className: style.cardStyle },
                    React.createElement("h1", null, "Skills"),
                    React.createElement(
                        "ul",
                        null,
                        React.createElement("li", null, "knowledge of training organization methods;"),
                        React.createElement("li", null, "experience of participation in competitions;"),
                        React.createElement("li", null, "knowledge of the basics of medicine, physiology, and psychology;")
                    ),
                    React.createElement("h1", null, "Contact Information"),
                    React.createElement(
                        "ul",
                        null,
                        React.createElement("li", null, "Email: example@example.com"),
                        React.createElement("li", null, "Telephone: 123-456-7890"),
                        React.createElement("li", null, "Address: street Nodovska, 44")
                    ),
                    React.createElement("h1", null, "Experience"),
                    React.createElement(
                        "div",
                        null,
                        "He's from American, Experienced trainer with 3 years of experience, specializing in the field of sports coaching. Goal oriented and committed to work, excellent communication and interpersonal skills"
                    )
                )
            ),
            React.createElement(
                "div",
                { className: style.card2 },
                React.createElement("h1", { className: style.textTitle2 }, "John Doe"),
                React.createElement("img", { src: img2, className: style.cardImg2, alt: "Зображення тренера" }),
                React.createElement(
                    "div",
                    { className: style.cardStyle },
                    React.createElement("h1", null, "Skills"),
                    React.createElement(
                        "ul",
                        null,
                        React.createElement("li", null, "dexterity will show its abilities, develop strength potential;"),
                        React.createElement("li", null, "the possibility of promoting professional activity;"),
                        React.createElement("li", null, "methodically teach professional activities")
                    ),
                    React.createElement("h1", null, "Contact Information"),
                    React.createElement(
                        "ul",
                        null,
                        React.createElement("li", null, "Email: example@example.com"),
                        React.createElement("li", null, "Telephone: 561-932-3910"),
                        React.createElement("li", null, "Address: street Mobilna, 12")
                    ),
                    React.createElement("h1", null, "Experience"),
                    React.createElement(
                        "div",
                        null,
                        "He graduated from the University of Physical Education in Germany. He started his coaching career in a small town where he worked for two years. The next stage was the city, where he worked for another four years as a head coach and led his students to international Olympics"
                    )
                )
            ),
            React.createElement(
                "div",
                { className: style.card2 },
                React.createElement("h1", { className: style.textTitle2 }, "John Doe"),
                React.createElement("img", { src: img3, className: style.cardImg2, alt: "Зображення тренера" }),
                React.createElement(
                    "div",
                    { className: style.cardStyle },
                    React.createElement("h1", null, "Skills"),
                    React.createElement(
                        "ul",
                        null,
                        React.createElement("li", null, "ability to create a sports diet for athletes of different ages, genders;"),
                        React.createElement("li", null, "assistance and clear insurance during training;"),
                        React.createElement("li", null, "created short and long-term exercise programs for clients")
                    ),
                    React.createElement("h1", null, "Contact Information"),
                    React.createElement(
                        "ul",
                        null,
                        React.createElement("li", null, "Email: example@example.com"),
                        React.createElement("li", null, "Telephone: 454-639-7834"),
                        React.createElement("li", null, "Address: street Dobuvska, 43")
                    ),
                    React.createElement("h1", null, "Experience"),
                    React.createElement(
                        "div",
                        null,
                        "Interned at a university for one year in Ireland. After that, he got a job as an assistant coach for a year, then, after receiving the title of senior coach, he started an independent career."
                    )
                )
            )
        );
    }
}