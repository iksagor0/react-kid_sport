// import React from 'react'
import "../../assets/css/WeAre.css";
import flyingGirl from "../../assets/img/flying-girl.png";

export default function WeAre() {
    return (
        <div id="weAre">
            <div className="txtArea">
                <h2>We who are?</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iusto similique officiis enim iure quaerat? Quasi, ipsum non
                    quia aspernatur repellendus officia, odit neque ducimus
                    dolorem obcaecati placeat eius, quibusdam voluptate fuga
                </p>

                <button className="myBtn">Read more</button>
            </div>

            <div className="imgArea">
                <img src={flyingGirl} alt="flyingGirl" />
            </div>
        </div>
    );
}
