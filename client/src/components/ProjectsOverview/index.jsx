import React from 'react';
import PropTypes from 'prop-types';

import OverviewHeading from '../../elements/OverviewHeading/index';
import Project from './Project';


const ProjectsOverview = props => (
  <div className="projects-container">
    <OverviewHeading>Projects</OverviewHeading>
    <ul className="projects">
      {
        (props.projects !== '' && props.projects !== null)
        ?
          JSON.parse(props.projects).map(project => (
            <Project
              desc={project.project_description}
              tasks={project.total_tasks}
              finishedTasks={project.total_finished_tasks}
              key={project.id}
            >
              { project.project_name }
            </Project>
          ))
        :
          <li className="no-projects-notice">
            It seems like you have no projects!
          </li>
      }
    </ul>
  </div>
);

ProjectsOverview.propTypes = {
  projects: PropTypes.string.isRequired,
};

export default ProjectsOverview;
