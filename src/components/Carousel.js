import React from 'react';
// import pic1 from "../project-images/1.Glamoour/1a.png";
// import pic2 from "../project-images/1.Glamoour/1b.png";
// import pic3 from "../project-images/1.Glamoour/1c.png";
// import pic4 from "../project-images/1.Glamoour/1d.png";


export default function Carousel(props) {
    return (
        <div>
            <div id="carouselExampleIndicators" className
                ="carousel slide" data-bs-ride="carousel">
                <div className
                    ="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="active" aria-current="true" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="active" aria-current="true" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" className="active" aria-current="true" aria-label="Slide 4"></button>
                    {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
                </div>
                <div className
                    ="carousel-inner">
                    <div className
                        ="carousel-item active">
                        <img src={props.img1} className
                            ="d-block w-100 cara-img" alt="..." />
                    </div>
                    <div className
                        ="carousel-item">
                        <img src={props.img2} className
                            ="d-block w-100 cara-img" alt="..." />
                    </div>
                    <div className
                        ="carousel-item">
                        <img src={props.img3} className
                            ="d-block w-100 cara-img" alt="..." />
                    </div>
                    <div className
                        ="carousel-item">
                        <img src={props.img4} className
                            ="d-block w-100 cara-img" alt="..." />
                    </div>
                </div>
                <button className
                    ="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className
                        ="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className
                        ="visually-hidden">Previous</span>
                </button>
                <button className
                    ="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className
                        ="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className
                        ="visually-hidden">Next</span>
                </button>
            </div>
            <div className="popup-buttons">
                <a href={props.link} target="_blank" className="button-popup">Github Link</a>
                {props.visit ? <a href={props.visit} target="_blank" className="button-popup">Visit</a> : <div></div>}
            </div>
        </div>
    )
}