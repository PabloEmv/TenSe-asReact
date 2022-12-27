import React from "react";
import {CabeceraComponent, CuerpoComponent, LoginComponent, PieComponent } from "../components";

const HomePage = () => {
    return (
        <div class="bg-success p-2 text-dark bg-opacity-10">
            <div>
                <CabeceraComponent />
                <LoginComponent />
                <CuerpoComponent/>
                <br/>
                <PieComponent />
                <br />
            </div>
        </div>
    )
}

export default HomePage;
