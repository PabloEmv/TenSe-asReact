import React from "react";
import AssignmentIcon from '@mui/icons-material/Assignment';

const PendingTaskComponent = ({pendingTaskName}) => {
    return (
      <div className="row mt-4 mb-4 flex-nowrap">
        <AssignmentIcon
        className="col-1 icons-RB bg-info bg-opacity-75 position-relative ms-1"
        style={{ width: "1.5em", height: "1.5em" }}
      />
      <span className="col fs-6 text-nowrap position-relative">{pendingTaskName}</span>
      </div>)
}

export default PendingTaskComponent