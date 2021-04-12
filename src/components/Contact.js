import React from 'react';
import Particle from './Particle';
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";


export default function Contact() {

    const { handleSubmit, register, errors } = useForm();
    // const onSubmit = values => sendEmail(event);

    function sendEmail(event) {
        event.preventDefault();

        emailjs.sendForm('service_23sdr09', 'template_65ac7da', event.target, 'user_wExUjnTqihhwXMlDIgGuS')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        event.target.reset();
        alert("Thanks for reaching out. Your message has been sent.");
    }




    return (
        <>
            <div className="disable"><Particle /></div>
            <div className="common-container">
                <div className="inner-container">
                    <h2>Have a question or want to work together?</h2>
                    <div className="contact-contents">
                        <form onSubmit={sendEmail}>
                            <div>
                                <label htmlFor="firstName">First Name :</label>
                                <input type="text" name="firstName" ref={register()} className="firstName" placeholder="Enter your First Name...." />
                            </div>
                            <div>
                                <label htmlFor="lastName">Last Name :</label>
                                <input type="text" name="lastName" ref={register()} className="lastName" placeholder="Enter your Last Name..." />
                            </div>
                            <div>
                                <label htmlFor="email">Email :</label>
                                <input type="text" name="email" ref={register({
                                    required: "Email is required.",
                                    pattern: {
                                        value: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,
                                        message: "Please enter a valid email!"
                                    },
                                })} className="email" placeholder="Enter your Email..." />
                            </div>
                            {/* {errors.email && errors.email.message} */}
                            <div>
                                <label htmlFor="message">Message :</label>
                                <textarea name="message" ref={register()} className="message" placeholder="Enter your Message..." />
                            </div>
                            {errors?.email && <div className="msg-sent">{errors.email.message}</div>}
                            <div className="contact-button">
                                <button className="button-contact" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}
