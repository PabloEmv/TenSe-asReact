import React from "react";
import achievementImg from '../../assets/img/achievement_award.png'
import './achievement.css'

const AchievementsContentComponent = () => {
  return (
    <div className="height-100 container">
      <h4 className="text-center logrosFondo p-2">Logros</h4>
      <div className="modulo row logrosFondo mt-5">
        <div className="pin col m-4"><div class="card" style={{width: "150px"}}>
          <div className="px-5 pt-3"><img
            src={achievementImg}
            class="card-img-top"
            alt="..."
          /></div>
          
          <div class="card-body">
            <p class="card-text text-center">
              Some
            </p>
          </div>
        </div></div>
        <div className="cup"></div>
        
      </div>
    </div>
  );
};

export default AchievementsContentComponent;
