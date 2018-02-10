import React from 'react';
import Datetime from 'react-datetime';
import { format } from 'moment'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import fetchProjects from '../../actions/project';
import priorityToString from '../../utils/priorityToString';

import OverviewHeading from '../../elements/OverviewHeading/index';

@connect(store => ({
  projects: store.project.projects,
}))
export default class CreateTaskOverview extends React.Component {
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
  }

  componentWillMount() {
    this.props.dispatch(fetchProjects()); // eslint-disable-line react/prop-types
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
        this.setState({ taskPriority: e.target.value });
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

  render() {
    let projects = [];
    if (this.props.projects !== '[]' && this.props.projects !== null) {
      projects = JSON.parse(this.props.projects);
    }

    return (
      <div className="create-new-task-container">
        <OverviewHeading>Create New Task</OverviewHeading>
        <form className="create-task-form" onSubmit={this.handleSubmit}>
          <div>
            <label className="input-label" htmlFor="task-name">Name</label>
            <input
              id="task-name"
              name="task-name"
              type="text"
              value={this.state.taskName}
              onChange={this.inputHandler}
            />
          </div>
          <div>
            <label className="input-label" htmlFor="task-desc">Description</label>
            <input
              id="task-desc"
              name="task-desc"
              type="text"
              value={this.state.taskDesc}
              onChange={this.inputHandler}
            />
          </div>
          <div>
            <label className="input-label" htmlFor="task-priority">Priority</label>
            <select
              id="task-priority"
              name="task-priority"
              className="select-priority"
              onChange={this.inputHandler}
              value={this.state.taskPriority}
            >
              <option value={1}>{ priorityToString(1) }</option>
              <option value={2}>{ priorityToString(2) }</option>
              <option value={3}>{ priorityToString(3) }</option>
            </select>
          </div>
          <div>
            <label className="input-label" htmlFor="project">Project</label>
            <select
              id="project"
              className="select-project"
              name="project"
              onChange={this.inputHandler}
              value={this.state.project}
            >
              <option />
              {
                projects ?
                  projects.map(project => (
                    <option value={project.id}>{ project.project_name }</option>
                  ))
                :
                  <option>You have no projects!</option>
              }
            </select>
          </div>
          <div>
            <Datetime value={this.state.dueDate} onChange={this.datetimeHandler} />
          </div>
          <input name="submit" type="submit" value="Create Task" />
        </form>
      </div>
    );
  }
}

CreateTaskOverview.propTypes = {
  projects: PropTypes.string,
};

CreateTaskOverview.defaultProps = {
  projects: '',
};
