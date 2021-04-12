import React from 'react';
import logo from "../images/logo.png";
import Particle from "./Particle";
import { NavLink } from "react-router-dom";

function About() {
    return (
        <>            
            <div className="disable"><Particle height="55em"/></div>
            <div className="common-container">
                <div className="common-inner-container">
                    <div>
                        <h1>About me</h1>
                        <ul>
                            <li>I am Devraj Singh and will complete my B.tech(CSE) undergraduation in 2022.I’m a fast learner, able to pick up new skills and juggle different projects and roles with relative ease. My abundant energy fuels me in the pursuit of many interests, hobbies such as football, badminton and more.</li>
                        </ul>
                    </div>
                    <hr className="hr-line" />

                    <div>
                        <h1>Skills</h1>
                        <ul>
                            <li>Front-end Web Development(ReactJs, HTML/CSS/JavaScript)</li>
                            <li>Back-end Web Development(NodeJs, ExpressJs, MongoDB)</li>
                            <li>Android Development(Java)</li>
                            <li>Data Structures and Algorithms, C++</li>
                            <p>Check out my projects in the <NavLink to="/projects" className="navlink2">projects</NavLink> section.</p>
                        </ul>
                    </div>
                    <hr className="hr-line" />

                    <div>
                        <h1>Achievements</h1>
                        <ul>
                            <li>Bagged 5th position in Technovation Hackathon conducted by Sharda University and Greater Noida.</li>
                            <li>Participated in Smart India Hackathon 2020.</li>
                            <li>In top10 teams in YMCA, Faridabad Hackathon 2020.</li>
                        </ul>
                    </div>
                    <hr className="hr-line" />

                    <div>
                        <h1>Education</h1>
                        <ul>
                            <li>Started Btech with branch Computer Science in 2018 in B. S. Anangpuria Institute of Technology & Management affiliated to (J.C. Bose University of Science and Technology, YMCA).</li>
                            <li>Did my 10th from Modern School, Noida and 12th from Modern School, Faridabad</li>
                        </ul>
                    </div>
                    <hr className="hr-line" />
                </div>
            </div>
        </>
    )
}

export default About;