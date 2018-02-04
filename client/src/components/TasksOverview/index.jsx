import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import OverviewHeading from '../../elements/OverviewHeading/index';
import Task from '../../elements/Task/index';

import fetchTasks from '../../actions/task';

@connect(store => ({
  tasks: store.task.tasks,
}))
export default class TasksOverview extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchTasks()); // eslint-disable-line react/prop-types
  }

  taskItems() {
    let tasks;
    let taskItems;
    console.log(this.props)
    if (this.props.tasks !== '[]' && this.props.tasks !== null) {
      tasks = JSON.parse(this.props.tasks);
      taskItems = tasks.map(task =>
        (
          <Task
            project={task.project}
            priority={task.priority}
            dueDate={task.due_date}
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
