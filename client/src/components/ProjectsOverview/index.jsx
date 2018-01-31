import React from 'react';

import OverviewHeading from '../../elements/OverviewHeading/index';
import Project from '../../elements/Project/index';

export default class ProjectsOverview extends React.Component {
  render() {
    return (
      <div className="projects-container">
        <OverviewHeading>Projects</OverviewHeading>
        <ul className="projects">
          <Project
            desc="Description for project"
            tasks={40}
            finishedTasks={5}
          >
            Project 1
          </Project>
          <Project
            desc="Description for project"
            tasks={70}
            finishedTasks={20}
          >
            Project 2
          </Project>
        </ul>
      </div>
    );
  }
}
