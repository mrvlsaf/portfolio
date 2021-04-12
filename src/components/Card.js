import React, { useState } from 'react';
// import Popup from "./Popup";
import { Modal, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Cara from "./Carousel";
export default function Card(props) {

    const [openPop, setopenPop] = useState(false);


    return (
        <>
            <div className="card-container">
                <div className="project-card">
                    <div className="popup-behind">
                        <h4>{props.text}</h4>
                        <h5 className="card-inner-text">{props.subText}</h5>
                        <button className="button-2 button-card" onClick={() => setopenPop(true)}>
                            View
                        </button>
                    </div>

                    <div className="popup-front">
                        <Modal size="lg" show={openPop} className="modal-inner2" onHide={() => setopenPop(false)}>
                            <h2 className="overview-head">Overview of the Website</h2>
                            <div className="modal-outer">
                                <Modal.Body>
                                    <Cara
                                        img1={props.img1}
                                        img2={props.img2}
                                        img3={props.img3}
                                        img4={props.img4}
                                        popupText={props.popupText}
                                        link={props.link}
                                        visit={props.visit}
                                    />
                                </Modal.Body>
                                <div className="tt">
                                    <button className="button-1 button-popup" onClick={() => setopenPop(false)}>Close Popup</button>
                                </div>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        </>
    )
}

