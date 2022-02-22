// import React from 'react'
import "../../assets/css/Backtoschool.css";
import backtoschool from "../../assets/img/backtoschool.png";

export default function Backtoschool() {
    return (
        <div id="backtoschool" className="text-center">
            <div className="logoArea">
                <img src={backtoschool} alt="" />
                <h3>BACK TO SCHOOL</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi eveniet recusandae totam minima officia quis rem
                    explicabo alias iure quae.
                </p>
            </div>
            <div className="searchBox">
                <input type="text" placeholder="More info" />
                <a href="/#">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </a>
            </div>
        </div>
    );
}
