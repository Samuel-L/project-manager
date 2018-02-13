import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const Task = props => (
  <li className="task">
    <h3 className="task__heading">{props.children}</h3>
    <div className="task__info-container">
      <p className="task__info">
        <span className="task__label">Project:</span> {props.project}
      </p>
      <p className="task__info">
        <span className="task__label">Priority:</span> {props.priority}
      </p>
      <p className="task__info">
        <span className="task__label">Due date:</span>
        <Moment format="YYYY-MM-DD HH:mm A">
          {props.dueDate}
        </Moment>
      </p>
    </div>
  </li>
);

Task.propTypes = {
  children: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  dueDate: PropTypes.string,
};

Task.defaultProps = {
  dueDate: 'N/A',
};

export default Task;
