import React from "react";
import '../components/Sidebar/sidebars.css'
//import { useNavigate } from "react-router-dom"
import {
  BtnSidebarLComponent,
  BtnSidebarRComponent,
  SidebarLeftComponent,
  SidebarRightComponent,
  DashboardContentComponent
} from "../components";

const DashboardPage = () => {
  /* const [element, setElement] = React.useState(null);
  const [navBar, setNavBar] = React.useState(null);
  const [bodyPd, setBodyPd] = React.useState(null);
  const [header, setHeader] = React.useState(null);

  const handleClick = () => {
    if (element) {
      if (element.classList.contains("bx-x")) {
        setElement(element.classList.remove("bx-x"))
        
        navBar.classList.remove("show");
        bodyPd.classList.remove("body-pd");
        header.classList.remove("body-pd");
      } else {
        element.classList.add("bx-x");
        navBar.classList.add("show");
        bodyPd.classList.add("body-pd");
        header.classList.add("body-pd");
      }
    }
  }; */

  return (
  <div>
    <div class="header" id="header">
      <BtnSidebarLComponent/>
      <BtnSidebarRComponent />
      </div>
      <SidebarLeftComponent />
      <SidebarRightComponent />
      <DashboardContentComponent />
</div>
  );
};

export default DashboardPage;
