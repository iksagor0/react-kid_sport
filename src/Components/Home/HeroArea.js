// import React from 'react'
import "../../assets/css/HeroArea.css";
import kidSport from "../../assets/img/kid-sport.png";

export default function HeroArea() {
    return (
        <div id="HeroArea">
            <div className="txtArea">
                <h1>KIDS</h1>
                <h1>SPORTS</h1>
                <p>BACK TO SCHOOL</p>
            </div>
            <div className="imgArea">
                <img src={kidSport} alt="kidSport" />
            </div>
        </div>
    );
}
