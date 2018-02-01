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
    if (this.props.projects) {
      projects = JSON.parse(this.props.projects);
    } else { projects = []; }

    const projectItems = projects.map(proj =>
      (
        <Project
          desc={proj.project_description}
          tasks={proj.total_tasks}
          finishedTasks={proj.total_finished_tasks}
        >
          { proj.project_name }
        </Project>
      ));

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
