import React from 'react';
import PropTypes from 'prop-types';

export default class Task extends React.Component {
  render() {
    return (
      <li className="task">
        <h3 className="task__heading">{this.props.children}</h3>
        <div className="task__info-container">
          <p className="task__info">
            <span className="task__label">Project:</span> {this.props.project}
          </p>
          <p className="task__info">
            <span className="task__label">Priority:</span> {this.props.priority}
          </p>
          <p className="task__info">
            <span className="task__label">Due date:</span> {this.props.dueDate}
          </p>
        </div>
      </li>
    );
  }
}

Task.propTypes = {
  children: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  dueDate: PropTypes.string,
};

Task.defaultProps = {
  dueDate: 'N/A',
};
