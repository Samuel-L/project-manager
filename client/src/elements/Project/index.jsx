import React from 'react';
import PropTypes from 'prop-types';

export default class Project extends React.Component {
  render() {
    return (
      <li className="project">
        <div className="info">
          <h3 className="project-heading">{this.props.children}</h3>
          <p className="project-description">{this.props.desc}</p>
        </div>
        <div className="tasks">
          <p className="task-count">
            {this.props.finishedTasks}/{this.props.tasks} done
          </p>
          <p>Tasks: </p>
        </div>
      </li>
    );
  }
}

Project.propTypes = {
  children: PropTypes.string.isRequired,
  desc: PropTypes.string,
  finishedTasks: PropTypes.number.isRequired,
  tasks: PropTypes.number.isRequired,
};

Project.defaultProps = {
  desc: '',
};
