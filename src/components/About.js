import React from 'react';
import Particle from "./Particle";
import { NavLink } from "react-router-dom";

export default function About() {
    return (
        <div>
            <div className="disable"><Particle height={"240%"} /></div>
            <div className="common-container">
                <div className="common-inner-container">
                    <div className='common-section'>
                        <h1>Skills</h1>
                        <p style={{ marginBottom: "1em" }}>I possess a strong proficiency in the following technologies and tools:</p>
                        <ul>
                            <li>ReactJs: Expertise in building dynamic and responsive user interfaces using the ReactJs framework.</li>
                            <li>HTML5 and CSS3: Proficiency in creating modern and visually appealing web layouts with clean and semantic markup.</li>
                            <li>Redux: Experience in utilizing Redux for state management in complex applications.</li>
                            <li>Git: Proficient in version control and collaborative development using Git.</li>
                            <li>Figma: Familiarity with design tools like Figma for creating intuitive and visually pleasing user interfaces.</li>
                        </ul>
                        <p>Additionally, I have knowledge of NodeJs, AWS, and Docker, which further enhances my ability to develop scalable and efficient applications.</p>
                        <p>Check out my work in the <NavLink to="/projects" className="navlink2">PROJECTS</NavLink> section.</p>
                    </div>
                    <hr className="hr-line" />

                    <div className='common-section'>
                        <h1>Experience</h1>
                        <h5 style={{ marginLeft: "0.5em" }}>Ottermap | September 2022 - Present</h5>
                        <p style={{ marginBottom: "0.5em" }}>At Ottermap, a smart property measurement platform, I have been responsible for designing and developing multiple core features using OpenLayers, Google Maps, ReactJs, and various libraries. These features have greatly improved the user experience and engagement on the platform.</p>
                        <p style={{ marginBottom: "1em" }}>Some of the key contributions I have made include:</p>
                        <ul>
                            <li>Designing and implementing a seamless order placement process that allows users to easily request property measurements.</li>
                            <li>Developing interactive map interactions, such as hovering and multiple select interactions, to enhance user engagement and ease of use.</li>
                            <li>Creating functionality for property features measurement, enabling users to accurately measure and assess different aspects of properties.</li>
                            <li>Implementing user notes and feedback features, facilitating effective communication between users and the platform.</li>
                            <li>Building an order sharing feature that allows users to easily share property measurement information with others.</li>
                        </ul>
                        <p>To ensure the best user experience, I have consistently followed a user-centric approach. I have actively sought and incorporated user feedback to refine existing features and address any pain points. Additionally, I have proactively identified and proposed new features that align with user needs and preferences. This approach has resulted in positive feedback from both users and stakeholders.</p>

                        <h5 style={{ margin: "1em 0 0.5em 0.5em" }}>Zouke | May 2021 - July 2021</h5>
                        <p style={{ marginBottom: "0.5em" }}>During my time at Zouke, I worked as a Frontend Developer, contributing to the development of their Minimum Viable Product (MVP). This experience provided me with valuable insights into handling and optimizing large codebases in a competitive environment.</p>
                        <p style={{ marginBottom: "1em" }}>Some notable achievements during this role include:</p>
                        <ul>
                            <li>Developing the Reset Password feature, allowing users to securely reset their passwords.</li>
                            <li>Implementing the Chat feature, enabling real-time communication between users.</li>
                            <li>Creating functionality for property features measurement, enabling users to accurately measure and assess different aspects of properties.</li>
                            <li>Creating the Live Performance Tracker screens, providing users with real-time performance data in a visually appealing manner.</li>
                        </ul>
                        <p>To ensure the scalability and efficiency of the applications, I adopted a structured approach to coding. By leveraging industry-standard tools and techniques, such as ReactJs, Redux, and CSS Modules, I ensured the development of robust and maintainable code.</p>
                    </div>
                    <hr className="hr-line" />

                    <div className='common-section'>
                        <h1>Education</h1>
                        <p>I hold a Bachelor of Technology degree in Computer Science Engineering from B.S.A.I.T.M, Faridabad. During my academic journey, I consistently demonstrated strong technical aptitude and maintained a GPA of 8.296. This education has provided me with a solid foundation in computer science principles and problem-solving skills.</p>
                    </div>
                    <hr className="hr-line" />
                </div>
            </div>
        </div>
    )
}