import React from "react";

const CupComponent = ({img, text}) => {
    return (
        <div className="m-2 my-3 blockedAchievement cardAchi">
      <div class="card cardCupColor" style={{ width: "130px" }}>
        <div className="px-4 pt-3">
          <img src={img} class="card-img-top" alt="..." />
        </div>

        <div class="card-body">
          <p class="card-text text-center">{text}</p>
        </div>
      </div>
    </div>
    )
}
export default CupComponent