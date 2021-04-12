import React from 'react';
import image from "../images/image.jpg";
import "../index.css";
import { NavLink } from "react-router-dom";
import Typed from "react-typed";
import instagramPic from "../images/instagram.svg";
import twitterPic from "../images/twitter.svg";
import githubPic from "../images/github.svg";
import linkedinPic from "../images/linkedin.svg";
import Carousel from "./Carousel";


export default function Home() {
    return (
        <div className="home-container">
            <div className="home-container-2">
                <img src={image} alt="author's image" />
                <div className="info-container">
                    <h1><Typed
                        className="hey"
                        strings={["Hey There!", "Hope you are good!"]}
                        typeSpeed={80}
                        backSpeed={30}
                    /> </h1>
                    {/* <h1>Hey there!</h1> */}
                    <h2 className="hey-there">My name is</h2>
                    <div className="name">Devraj Singh</div>
                    {/* <Typed
                    className="typed-text"
                    strings={["React.Js", "Web Development", "Devraj Singh"]} /> */}
                    <div className=" resp-button-2"><NavLink className="button-2" to="/about">More about me</NavLink></div>


                    <div className="social-media-container">
                        <h4>Follow me:</h4>
                        <div className="social-media-icons">
                            <a href="https://www.instagram.com/mrvlsaf._/" target="_blank"><img src={instagramPic} alt="instagram icon" /></a>
                            <a href="https://github.com/mrvlsaf" target="_blank"><img src={githubPic} alt="github icon" /></a>
                            <a href="https://twitter.com/mrvlsaf" target="_blank"><img src={twitterPic} alt="twitter icon" /></a>
                            <a href="https://www.linkedin.com/in/mrvlsaf05/" target="_blank"><img src={linkedinPic} alt="linkedin icon" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
