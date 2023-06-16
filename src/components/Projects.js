import React from 'react';
import Card from "./Card";
import Particle from "./Particle";
import Sdata from "./Sdata";


export default function Projects() {
    return (
        <>
            <div className="disable"><Particle /></div>
            <div className="common-container">
                <div className="project-container">
                    {
                        Sdata.map((val, ind) => {
                            return <Card
                                key={ind}
                                text={val.text}
                                subText={val.subText}
                                img1={val.img1}
                                img2={val.img2}
                                img3={val.img3}
                                img4={val.img4}
                                popupText={val.popupText}
                                link={val.link}
                                visit={val.visit}
                            />
                            {/* </div> */ }
                        })
                    }

                </div>
            </div>
        </>
    )
}
