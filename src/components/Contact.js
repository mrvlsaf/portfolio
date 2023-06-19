import React, { useEffect, useState } from 'react';
import Particle from './Particle';
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";


export default function Contact() {

    const { register, errors } = useForm();
    const [successMessage, setSuccessMessage] = useState(false);

    function sendEmail(event) {
        event.preventDefault();

        emailjs.sendForm('service_23sdr09', 'template_65ac7da', event.target, 'user_wExUjnTqihhwXMlDIgGuS')
            .then((result) => {
                console.log("Message Sent");
            }, (error) => {
                console.log(error.text);
            });
        event.target.reset();
        setSuccessMessage(true);
    }

    useEffect(() => {
        if (successMessage) {
            setTimeout(function () {
                setSuccessMessage(false);
            }, 3000);
        }
    }, [successMessage])

    return (
        <>
            <div className="disable"><Particle height={"80%"} /></div>
            <div className="common-container">
                <div className="inner-container">
                    <h2 style={{ margin: "0.5em 0.5em 0 0.5em", textAlign: "center" }}>Have a question or want to work together?</h2>
                    <div className="contact-contents">
                        <form onSubmit={sendEmail}>
                            <div>
                                <label htmlFor="firstName">First Name :</label>
                                <input type="text" name="firstName" ref={register()} className="firstName" placeholder="Type your First Name" />
                            </div>
                            <div>
                                <label htmlFor="lastName">Last Name :</label>
                                <input type="text" name="lastName" ref={register()} className="lastName" placeholder="Type your Last Name" />
                            </div>
                            <div>
                                <label htmlFor="email">Email :</label>
                                <input type="text" name="email" ref={register({
                                    required: "Email is required.",
                                    pattern: {
                                        value: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,
                                        message: "Please enter a valid email!"
                                    },
                                })} className="email" placeholder="Type your Email address" />
                            </div>
                            {/* {errors.email && errors.email.message} */}
                            <div>
                                <label htmlFor="message">Message :</label>
                                <textarea name="message" ref={register()} className="message" placeholder="Type your Message" />
                            </div>
                            {errors?.email && <div className="msg-sent">{errors.email.message}</div>}
                            <div className="contact-button">
                                <button className="button-contact" type="submit">Submit</button>
                            </div>
                            {successMessage ? <div class="alert alert-success success-msg" role="alert">
                                Thanks for reaching out. Your message has been sent.
                            </div> : null}
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}