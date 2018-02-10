import React from 'react';
import { connect } from 'react-redux';

import OverviewHeading from '../../elements/OverviewHeading/index';
import Report from '../../elements/Report/index';

import fetchProjects from '../../actions/project';

@connect(store => ({
  projects: store.project.projects,
}))
export default class TimeWorkedOverview extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchProjects()); // eslint-disable-line react/prop-types
  }

  reportItems() {
    let projectItems;
    if (this.props.projects !== '[]' && this.props.projects !== null) {
      console.log(this.props.reports);
      const projects = JSON.parse(this.props.projects);
      projectItems = projects.map(project => (
        <Report
          key={project.id}
          lastSevenDays={`${project.worked_since_start_of_week / 60} hours`}
          total={`${project.total_worked_time / 60} hours`}
        >
          {project.project_name}
        </Report>
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
      <div className="time-worked-container">
        <OverviewHeading>Time Worked</OverviewHeading>
        <ul className="reports">
          { this.reportItems() }
        </ul>
      </div>
    );
  }
}
