import React from "react";
import './Task.scss';

const Tasks = () => {

  return (
    <div className="task">
      <div className="task__wrapper">
        <div className="task__title-container">
          <h2 className="task__title">YOUR TASKS</h2>
        </div>
        <div className="task__tasks-container">
          <div className="task__name">Application Setup</div>
          <div className="task__name">Static Books List</div>
          <div className="task__name">Administration Panel</div>
          <div className="task__name">Connect Admin with Frontend</div>
          <div className="task__name">Book Review Feature</div>
        </div>
      </div>
    </div>
  )
}

export default Tasks;