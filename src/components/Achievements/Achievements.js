import React from "react";
import PinComponent from "./Pin";
import "./achievement.css";
import achievementImg from "../../assets/img/achievement_award.png";
import cupImg from "../../assets/img/trophy_icon.png";
import CupComponent from "./Cup";

const AchievementsContentComponent = () => {
  return (
    <div className="height-100 container">
      <h4 className="text-center logrosFondo p-2 fw-bolder">Logros</h4>

      <div className="logrosFondo">
        <div className="logrosFondo2">
          <h2 className="pt-3 ps-4 fw-bolder opacidadTituloModulos">Modulo 1</h2>
          <div className="gx-2 logrosDisplay mt-5 px-3">
            <PinComponent img={achievementImg} />
            <PinComponent img={achievementImg} />
            <PinComponent img={achievementImg} />
            <PinComponent img={achievementImg} />
            <PinComponent img={achievementImg} />
          </div>
          <div className="cup">
            <CupComponent img={cupImg} />
          </div>
        </div>

        <div className="logrosFondo2">
        <h2 className="pt-3 ps-4 fw-bolder opacidadTituloModulos">Modulo 2</h2>
          <div className="gx-2 logrosDisplay mt-5 px-3">
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
            <CupComponent img={cupImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsContentComponent;
