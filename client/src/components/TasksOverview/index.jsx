import React from 'react';

import OverviewHeading from '../../elements/OverviewHeading/index';
import Task from '../../elements/Task/index';

export default class TasksOverview extends React.Component {
  render() {
    return (
      <div className="tasks-container">
        <OverviewHeading>Tasks</OverviewHeading>
        <ul className="tasks">
          <Task
            project="Test Project"
            priority="NOT IMPORTANT"
            dueDate="2017/01/01"
          >
            Task 1
          </Task>
          <Task
            project="Test Project"
            priority="NOT IMPORTANT"
            dueDate="2017/01/01"
          >
            Task 1
          </Task>
          <Task
            project="Test Project"
            priority="NOT IMPORTANT"
            dueDate="2017/01/01"
          >
            Task 1
          </Task>
          <Task
            project="Test Project"
            priority="NOT IMPORTANT"
            dueDate="2017/01/01"
          >
            Task 1
          </Task>
        </ul>
      </div>
    );
  }
}
