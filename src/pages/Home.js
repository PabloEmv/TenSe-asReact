import React from "react";
import {CabeceraComponent, CuerpoComponent, CuerpoComponent2, LoginComponent, PieComponent, TeamComponent } from "../components";

const HomePage = () => {
    return (
            <div>
                <CabeceraComponent />
                <LoginComponent />
                <CuerpoComponent/>
                <CuerpoComponent2/>
                <TeamComponent />
                <PieComponent />
            </div>
    )
}

export default HomePage;
