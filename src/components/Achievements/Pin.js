import React from "react";
const PinComponent = ({img}) => {
  return (
    <div className="m-2 my-3 blockedAchievement cardAchi">
      <div class="card cardAchievement" style={{ width: "130px" }}>
        <div className="px-4 py-1">
          <img src={img} class="card-img-top" alt="..." />
        </div>
      </div>
    </div>
  );
}; 

export default PinComponent;
