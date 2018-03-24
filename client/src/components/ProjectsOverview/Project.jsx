import React from 'react';
import PropTypes from 'prop-types';

const Project = props => (
  <li className="project">
    <div className="info">
      <h3 className="project-heading">{props.children}</h3>
      <p className="project-description">{props.desc}</p>
    </div>
    <div className="tasks">
      <p className="task-count">
        <span className="finished-tasks">{props.finishedTasks}</span>
        /
        {props.tasks} done
      </p>
      <p>Tasks: </p>
    </div>
  </li>
);

Project.propTypes = {
  children: PropTypes.string.isRequired,
  desc: PropTypes.string,
  finishedTasks: PropTypes.number.isRequired,
  tasks: PropTypes.number.isRequired,
};

Project.defaultProps = {
  desc: '',
};

export default Project;
