// import React from 'react'
import Backtoschool from "./Backtoschool";
import HeroArea from "./HeroArea";
import InfoGrid from "./InfoGrid";
import Ready from "./Ready";
import WeAre from "./WeAre";
import YourMind from "./YourMind";

export default function Home() {
    return (
        <div id="home">
            <HeroArea />
            <Backtoschool />
            <Ready />
            <WeAre />
            <YourMind />
            <InfoGrid />
        </div>
    );
}
