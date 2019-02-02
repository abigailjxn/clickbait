import React from "react";
import "./style.css";

function Footer() {
    return <>
    <footer className="navbar navbar-light fixed-bottom">
    <img src="../../public/memes/bongocat.jpg" alt="bongocat"></img>
        <h3 className="navbar-text">Memes served hot and fast, but don't click the same one twice!</h3>
        <h3 className="navbar-text">Your Score: | High Score: </h3>
    </footer>
    </>
}

export default Footer;