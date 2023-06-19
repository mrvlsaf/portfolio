import React from 'react';
import Particles from "react-particles-js";

export default function Particle({ height }) {
    return (
        <div>
            <Particles
                height={height}
                params={{
                    particles: {
                        number: {
                            value: 60,
                            density: {
                                enable: true,
                                value_area: 1100
                            }
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 2,
                                color: "#ffffff"
                            }
                        },
                        color: {
                            value: "#000000"
                        },
                        line_linked: {
                            width: "2"
                        },
                        interactivity: {
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: "repulse"
                                }
                            }
                        }
                    }
                }}
            />
        </div>
    )
}