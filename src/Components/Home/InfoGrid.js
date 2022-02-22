// import React from "react";
import "../../assets/css/InfoGrid.css";
import rocket from "../../assets/img/rocket.png";
import scale from "../../assets/img/scale.png";
import star from "../../assets/img/star.png";

// Text Function
function TxtGrid() {
    return (
        <div className="grid txt-grid col-6 text-center">
            <div className="txtContent">
                <h3>More Info</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quo vitae aspernatur totam natus omnis, est eaque minus eos
                    reiciendis reprehenderit?
                </p>
            </div>
        </div>
    );
}

// Image Function
function ImgGrid({ image }) {
    return (
        <div
            className={
                image === rocket
                    ? "grid img-grid rocket col-6"
                    : "grid img-grid col-6"
            }
        >
            <img src={image} alt="Info-Img" />
        </div>
    );
}

// =============================
//       Main Function
// =============================
export default function InfoGrid() {
    return (
        <div id="infoGrid">
            <div className="grid-wrapper row g-5">
                <TxtGrid />
                <ImgGrid image={rocket} />
                <ImgGrid image={scale} />
                <TxtGrid />
                <TxtGrid />
                <ImgGrid image={star} />
            </div>
        </div>
    );
}
