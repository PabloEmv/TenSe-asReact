import React, { useEffect } from "react";
import '../components/Sidebar/sidebars.css'
//import { useNavigate } from "react-router-dom"
import {
    BtnSidebarLComponent,
    BtnSidebarRComponent,
    SidebarLeftComponent,
    SidebarRightComponent,
    UserComponent
} from "../components";

const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    const bodypd = document.getElementById(bodyId);
    const headerpd = document.getElementById(headerId);

    if (toggle && nav && bodypd && headerpd) {
        toggle.addEventListener("click", () => {
            toggle.classList.toggle("bx-x");
            toggle.classList.toggle("open");
            nav.classList.toggle("show0");
            bodypd.classList.toggle("body-pd");
            headerpd.classList.toggle("body-pd");
        });
    }
};

const showNavbar2 = (toggleId, navId, bodyId, headerId, textSBR) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    const bodypd = document.getElementById(bodyId);
    const headerpd = document.getElementById(headerId);
    const hidden = document.getElementsByClassName(textSBR);

    if (toggle && nav && bodypd && headerpd && hidden) {
        toggle.addEventListener("click", () => {
            toggle.classList.toggle("bx-x2");
            toggle.classList.toggle("open");
            nav.classList.toggle("show2");
            bodypd.classList.toggle("body-pd2");
            hidden.classList.toggle("hiddenSBR");

        });
    }
};
const UserPage = () => {
    useEffect(() => {
        showNavbar("header-toggle", "nav-bar", "body-pd", "header");
      }, []);    useEffect(() => {
        showNavbar2("header-toggle2", "nav-bar2", "body-pd", "header", ".textSBR", ".textSBR2");
      }, []);
    return (
        <div id="body-pd" className="bodyp">
            <div className="header" id="header">
                <BtnSidebarLComponent />
                <BtnSidebarRComponent />
            </div>
                <SidebarLeftComponent />
                <SidebarRightComponent />
                <UserComponent />
        </div>
    );
};
export default UserPage;
