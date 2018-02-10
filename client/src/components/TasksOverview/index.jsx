import React, { Component } from 'react';
import PropTypes from 'prop-types';

import OverviewHeading from '../../elements/OverviewHeading/index';
import Task from '../../elements/Task/index';

import priorityToString from '../../utils/priorityToString';

class TasksOverview extends Component {
  taskItems() {
    let tasks;
    let taskItems;
    if (this.props.tasks !== '' && this.props.tasks !== null) {
      tasks = JSON.parse(this.props.tasks);
      taskItems = tasks.map(task =>
        (
          <Task
            project={task.project.project_name}
            priority={priorityToString(task.priority)}
            dueDate={task.due_date ? task.due_date : 'N/A'}
            key={task.id}
          >
            { task.task_name }
          </Task>
        ));
    } else {
      taskItems = (
        <li className="no-tasks-notice">
          It seems like you have no tasks!
        </li>);
    }

    return taskItems;
  }

  render() {
    return (
      <div className="tasks-container">
        <OverviewHeading>Tasks</OverviewHeading>
        <ul className="tasks">
          { this.taskItems() }
        </ul>
      </div>
    );
  }
}

TasksOverview.propTypes = {
  tasks: PropTypes.string,
};

TasksOverview.defaultProps = {
  tasks: '',
};

export default TasksOverview;
