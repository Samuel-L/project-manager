import React from 'react';
import PropTypes from 'prop-types';

import OverviewHeading from '../../elements/OverviewHeading/index';
import Task from '../../elements/Task/index';

import priorityToString from '../../utils/priorityToString';


const TasksOverview = props => (
  <div className="tasks-container">
    <OverviewHeading>Tasks</OverviewHeading>
    <ul className="tasks">
      { (props.tasks !== '' && props.tasks !== null)
      ?
        JSON.parse(props.tasks).map(task => (
          <Task
            project={task.project.project_name}
            priority={priorityToString(task.priority)}
            dueDate={task.due_date ? task.due_date : 'N/A'}
            key={task.id}
          >
            { task.task_name }
          </Task>
        ))
      :
        <li className="no-tasks-notice">
          It seems like you have no tasks!
        </li>
      }
    </ul>
  </div>
);

TasksOverview.propTypes = {
  tasks: PropTypes.string.isRequired,
};

export default TasksOverview;
