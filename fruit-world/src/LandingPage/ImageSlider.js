import React from "react";
import "../styles/slider.css";

export default function ImageSlider() {
    return (
        <div className="slider">
            <img
                src="https://images.unsplash.com/photo-1506806732259-39c2d0268443"
                alt="vegetables"
            />
            <button className="prev">❮</button>
            <button className="next">❯</button>

            <span className="tag">Vegetables</span>
        </div>
    );
}
