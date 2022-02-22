// import React from 'react'
import "../../assets/css/YourMind.css";
import orangeShape from "../../assets/img/orange-shape.png";

export default function YourMind() {
    return (
        <div id="yourMind">
            <div className="imgArea">
                <img src={orangeShape} alt="orangeShape" />
            </div>
        </div>
    );
}
