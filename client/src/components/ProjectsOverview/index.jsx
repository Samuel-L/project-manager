import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import OverviewHeading from '../../elements/OverviewHeading/index';
import Project from '../../elements/Project/index';

import fetchProjects from '../../actions/project';

@connect(store => ({
  projects: store.project.projects,
}))
export default class ProjectsOverview extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchProjects()); // eslint-disable-line react/prop-types
  }

  projectItems() {
    let projects;
    let projectItems;
    if (this.props.projects !== '[]' && this.props.projects !== null) {
      projects = JSON.parse(this.props.projects);
      projectItems = projects.map(proj =>
        (
          <Project
            desc={proj.project_description}
            tasks={proj.total_tasks}
            finishedTasks={proj.total_finished_tasks}
          >
            { proj.project_name }
          </Project>
        ));
    } else {
      projectItems = (
        <li className="no-projects-notice">
          It seems like you have no projects!
        </li>);
    }

    return projectItems;
  }

  render() {
    return (
      <div className="projects-container">
        <OverviewHeading>Projects</OverviewHeading>
        <ul className="projects">
          { this.projectItems() }
        </ul>
      </div>
    );
  }
}

ProjectsOverview.propTypes = {
  projects: PropTypes.string,
};

ProjectsOverview.defaultProps = {
  projects: '',
};
