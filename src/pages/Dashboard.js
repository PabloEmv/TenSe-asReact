import React, { useEffect } from "react";
import '../components/Sidebar/sidebars.css'
//import { useNavigate } from "react-router-dom"
import {
  BtnSidebarLComponent,
  BtnSidebarRComponent,
  SidebarLeftComponent,
  SidebarRightComponent,
  DashboardContentComponent,
  showNavbar, showNavbar2
} from "../components";


const DashboardPage = () => {

  useEffect(() => {
    showNavbar("header-toggle", "nav-bar", "body-pd", "header");
    showNavbar2("header-toggle2", "nav-bar2", "body-pd", "header", ".textSBR", ".textSBR2");
  }, []);

  
  return (
    <div id="body-pd" className="bodyp">
      <div className="header" id="header">
        <BtnSidebarLComponent />
        <BtnSidebarRComponent />
      </div>
        <SidebarRightComponent />
        <SidebarLeftComponent />
        <DashboardContentComponent />
    </div>
  );
};

export default DashboardPage;
