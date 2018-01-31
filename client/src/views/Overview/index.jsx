import React from 'react';

import PageHeading from '../../elements/PageHeading/index';
import TasksOverview from '../../components/TasksOverview/index';
import ProjectsOverview from '../../components/ProjectsOverview/index';
import TimeWorkedOverview from '../../components/TimeWorkedOverview/index';
import CreateTaskOverview from '../../components/CreateTaskOverview/index';

export default class Overview extends React.Component {
  render() {
    return (
      <div className="overview-container">
        <PageHeading>Overview</PageHeading>
        <TasksOverview />
        <ProjectsOverview />
        <TimeWorkedOverview />
        <CreateTaskOverview />
      </div>
    );
  }
}
