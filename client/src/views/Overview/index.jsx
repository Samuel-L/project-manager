import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchTasks } from '../../actions/task';
import fetchProjects from '../../actions/project';

import PageHeading from '../../elements/PageHeading/index';
import TasksOverview from '../../components/TasksOverview/index';
import ProjectsOverview from '../../components/ProjectsOverview/index';
import TimeWorkedOverview from '../../components/TimeWorkedOverview/index';
import CreateTaskOverview from '../../components/CreateTaskOverview/index';


class Overview extends Component {
  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchTasks();
  }

  render() {
    return (
      <div className="overview-container">
        <PageHeading>Overview</PageHeading>
        <TasksOverview tasks={this.props.tasks} />
        <ProjectsOverview projects={this.props.projects} />
        <TimeWorkedOverview />
        <CreateTaskOverview />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.task.tasks || '',
  projects: state.project.projects || '',
});

const mapDispatchToProps = dispatch => ({
  fetchTasks: () => dispatch(fetchTasks()),
  fetchProjects: () => dispatch(fetchProjects()),
});

Overview.propTypes = {
  tasks: PropTypes.string.isRequired,
  fetchTasks: PropTypes.func.isRequired,
  projects: PropTypes.string.isRequired,
  fetchProjects: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
