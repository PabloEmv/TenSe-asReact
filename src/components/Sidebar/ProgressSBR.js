import React from "react";
import EMobiledataIcon from '@mui/icons-material/EMobiledata';

const ProgressSbRComponent = ({nombreLeccion, nivelLeccion, porcentaje}) => {
  return (
      <div className="position-absolute leccionLvlSBR">
        <div className="col-4 position-relative">
          <div className="row">
            <span className="col fs-6">{nombreLeccion}</span>
            <span>{nivelLeccion}</span>
          </div>
        </div>
        <div className="progress col progressSbR mt-4 position-relative">
          <div
            className="progress-bar bg-info progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-label="Info example"
            style={{ width: porcentaje+"%" }}
            aria-valuenow="50"
            aria-valuemin=""
            aria-valuemax="100"
          ></div>
        </div>
      </div>
  );
};

export default ProgressSbRComponent;
