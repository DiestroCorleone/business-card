import React from "react";
import Header from "./components/Header";
import ButtonSection from "./components/ButtonSection";
import Main from "./components/Main";
import SocialLinks from "./components/SocialLinks";
import LightModeSwitch from "./components/LightModeSwitch";

export default function BusinessCard() {
    return(
        <div>
        <LightModeSwitch />
        <div className="container" id="container">
            <Header />
            <ButtonSection />
            <Main />
            <SocialLinks />
        </div>
        </div>
    );
}