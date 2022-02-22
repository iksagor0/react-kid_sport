// import React from "react";
import "../../assets/css/Ready.css";
import ballBoy from "../../assets/img/ball-boy.png";

export default function Ready() {
    return (
        <div id="ready">
            <div className="wrapper">
                <div className="txtArea">
                    <h2>Ready?</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Iusto similique officiis enim iure quaerat? Quasi,
                        ipsum non quia aspernatur repellendus officia, odit
                        neque ducimus dolorem obcaecati placeat eius, quibusdam
                        voluptate fuga dicta qui molestiae. Exercitationem,
                        rerum magnam eum nam doloremque provident similique
                        nihil inventore, doloribus, magni sint voluptatem
                        aspernatur maiores?
                    </p>
                </div>
                <div className="imgArea">
                    <img src={ballBoy} alt="ball-Boy" />
                </div>
            </div>
        </div>
    );
}
