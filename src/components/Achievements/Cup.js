import React from "react";

const CupComponent = ({img}) => {
    return (
        <div className="m-2 my-3">
      <div class="card cardCupColor" style={{ width: "130px" }}>
        <div className="px-4 pt-3">
          <img src={img} class="card-img-top" alt="..." />
        </div>

        <div class="card-body">
          <p class="card-text text-center">Some</p>
        </div>
      </div>
    </div>
    )
}
export default CupComponent