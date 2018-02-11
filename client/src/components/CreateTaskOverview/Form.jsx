import React from 'react';
import PropTypes from 'prop-types';
import Datetime from 'react-datetime';

import priorityToString from '../../utils/priorityToString';

const Form = props => (
  <form className="create-task-form" onSubmit={props.handleSubmit}>
    <div>
      <label className="input-label" htmlFor="task-name">Name</label>
      <input
        id="task-name"
        name="task-name"
        type="text"
        value={props.taskName}
        onChange={props.inputHandler}
      />
    </div>
    <div>
      <label className="input-label" htmlFor="task-desc">Description</label>
      <input
        id="task-desc"
        name="task-desc"
        type="text"
        value={props.taskDesc}
        onChange={props.inputHandler}
      />
    </div>
    <div>
      <label className="input-label" htmlFor="task-priority">Priority</label>
      <select
        id="task-priority"
        name="task-priority"
        className="select-priority"
        onChange={props.inputHandler}
        value={props.taskPriority}
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
        onChange={props.inputHandler}
        value={props.project}
      >
        <option />
        {
          (props.projects !== '' && props.projects !== null)
          ?
            JSON.parse(props.projects).map(project => (
              <option value={project.id} key={project.id}>
                { project.project_name }
              </option>
            ))
          :
            <option>You have no projects!</option>
        }
      </select>
    </div>
    <div>
      <label htmlFor="datetime">Due Date</label>
      <Datetime value={props.dueDate} onChange={props.datetimeHandler} />
    </div>
    <input name="submit" type="submit" value="Create Task" />
  </form>
);

Form.propTypes = {
  taskName: PropTypes.string.isRequired,
  taskDesc: PropTypes.string.isRequired,
  projects: PropTypes.string.isRequired,
  project: PropTypes.number.isRequired,
  dueDate: PropTypes.string.isRequired,
  taskPriority: PropTypes.number.isRequired,
  inputHandler: PropTypes.func.isRequired,
  datetimeHandler: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
