import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createTask } from '../../actions/task';

import OverviewHeading from '../../elements/OverviewHeading';
import Form from './Form';

class CreateTaskOverview extends Component {
  constructor() {
    super();
    this.state = {
      taskName: '',
      taskDesc: '',
      taskPriority: 1,
      dueDate: '',
      project: 0,
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.datetimeHandler = this.datetimeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  inputHandler(e) {
    switch (e.target.name) {
      case 'task-name':
        this.setState({ taskName: e.target.value });
        break;
      case 'task-desc':
        this.setState({ taskDesc: e.target.value });
        break;
      case 'task-priority':
        this.setState({ taskPriority: parseInt(e.target.value, 10) });
        break;
      case 'project':
        this.setState({ project: parseInt(e.target.value, 10) });
        break;
      // no default
    }
  }

  datetimeHandler(e) {
    this.setState({ dueDate: e.format() });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      taskName, taskDesc, taskPriority, dueDate, project,
    } = this.state;
    this.props.createTask(taskName, taskDesc, taskPriority, dueDate, project);
  }

  render() {
    const { projects } = this.props;

    return (
      <div className="create-task-container">
        <OverviewHeading>Create New Task</OverviewHeading>
        <Form
          {...this.state}
          projects={projects}
          inputHandler={this.inputHandler}
          datetimeHandler={this.datetimeHandler}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createTask: (name, desc, priority, dueDate, project) =>
    dispatch(createTask(name, desc, priority, dueDate, project)),
});

const mapStateToProps = () => ({});

CreateTaskOverview.propTypes = {
  createTask: PropTypes.func.isRequired,
  projects: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskOverview);
