import React from "react";
import "./style.css";

function Footer(props) {
    return <>
    <footer className="navbar navbar-light fixed-bottom">
    <img className="footer-img" src={props.image} alt="bongocat"></img>
        <h3 className="navbar-text">Memes served hot and fast, but don't click the same one twice!</h3>
        <h3 className="navbar-text">Your Score: {props.userScore} | High Score: {props.topScore}</h3>
    </footer>
    </>
}

export default Footer;