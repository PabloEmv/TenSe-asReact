import React from "react";
import {CabeceraComponent, CuerpoComponent, CuerpoComponent2, LoginComponent, PieComponent } from "../components";

const HomePage = () => {
    return (
            <div>
                <CabeceraComponent />
                <LoginComponent />
                <CuerpoComponent/>
                <CuerpoComponent2/>
                <PieComponent />
            </div>
    )
}

export default HomePage;
