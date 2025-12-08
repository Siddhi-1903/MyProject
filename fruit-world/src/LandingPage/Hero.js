import React from "react";
import "../styles/hero.css";
import ImageSlider from "./ImageSlider.js";


export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-left">
                <h1 className="hero-left">
                    Squeeze the Day <br></br>with Fresh Fruits !
                </h1>
                <h3 className="h3text">Fresh Fruits, Fresh Start, Fresh Planet</h3>
                <h5 className="h4text">
                    At Squeeze the Day, we’re passionate about supporting both your health and the planet. <br></br>Our fruits come from sustainable farms that care for the earth, <br></br> just as much as we care about delivering you the finest produce. <br></br>Let’s make a positive impact together, one fruit at a time.</h5>


            </div>

            <div className="hero-right">
                <ImageSlider />
            </div>
        </div>
    );
}
