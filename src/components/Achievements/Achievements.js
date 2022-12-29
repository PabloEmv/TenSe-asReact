import React, { useEffect } from "react";
import PinComponent from "./Pin";
import "./achievement.css";
import achievementImg from "../../assets/img/achievement_award.png";
import cupImg from "../../assets/img/trophy_icon.png";
import CupComponent from "./Cup";


const AchievementsContentComponent = () => {
  function removeActiveClass() {
    const dashboard = document.querySelector('.nav_link');
    dashboard.className = dashboard.className.replace('active', '');
  }

  function addActiveClass() {
    const achievement = document.querySelector('.achievement_nav');
    achievement.classList.add('active');
  }
  useEffect(removeActiveClass, []);
  useEffect(addActiveClass, []);
  return (
    <div className="height-100 container">
      <h4 className="text-center logrosFondo p-2 fw-bolder">Logros</h4>

      <div className="logrosFondo">
        <div className="logrosFondo2 px-5">
          <h2 className="pt-3 ps-4 fw-bolder opacidadTituloModulos">Modulo 1</h2>
          <div className="gx-2 logrosDisplay px-3">
            <PinComponent img={achievementImg} />
            <PinComponent img={achievementImg} />
            <PinComponent img={achievementImg} />
            <PinComponent img={achievementImg} />
            <PinComponent img={achievementImg} />
          </div>
          <div className="cup">
            <CupComponent img={cupImg} text="Vocales" />
          </div>
        </div>

        <div className="logrosFondo2 px-5">
        <h2 className="pt-3 ps-4 fw-bolder opacidadTituloModulos">Modulo 2</h2>
          <div className="gx-2 logrosDisplay px-3">
            <PinComponent img={achievementImg} />
            <PinComponent img={achievementImg} />
            <PinComponent img={achievementImg} />
            <PinComponent img={achievementImg} />
            <PinComponent img={achievementImg} />
            <PinComponent img={achievementImg} />
            <PinComponent img={achievementImg} />
            <PinComponent img={achievementImg} />
            <PinComponent img={achievementImg} />
          </div>
          <div className="cup">
            <CupComponent img={cupImg} text="Numeros" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsContentComponent;
