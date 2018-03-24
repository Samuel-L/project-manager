import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchTasks } from '../../actions/task';
import fetchProjects from '../../actions/project';
import fetchScopes from '../../actions/scope';

import PageHeading from '../../elements/PageHeading/index';
import TasksOverview from '../../components/TasksOverview/index';
import ProjectsOverview from '../../components/ProjectsOverview/index';
import TimeWorkedOverview from '../../components/TimeWorkedOverview/index';
import CreateTaskOverview from '../../components/CreateTaskOverview/index';


class Overview extends Component {
  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchTasks();
    this.props.fetchScopes();
  }

  render() {
    return (
      <div className="overview-container">
        <PageHeading>Overview</PageHeading>
        <TasksOverview tasks={this.props.tasks} />
        <ProjectsOverview projects={this.props.projects} />
        <TimeWorkedOverview projects={this.props.projects} />
        <CreateTaskOverview projects={this.props.projects} scopes={this.props.scopes} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.task.tasks || '',
  projects: state.project.projects || '',
  scopes: state.scope.scopes || '',
});

const mapDispatchToProps = dispatch => ({
  fetchTasks: () => dispatch(fetchTasks()),
  fetchProjects: () => dispatch(fetchProjects()),
  fetchScopes: () => dispatch(fetchScopes()),
});

Overview.propTypes = {
  tasks: PropTypes.string.isRequired,
  fetchTasks: PropTypes.func.isRequired,
  projects: PropTypes.string.isRequired,
  fetchProjects: PropTypes.func.isRequired,
  scopes: PropTypes.string.isRequired,
  fetchScopes: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
