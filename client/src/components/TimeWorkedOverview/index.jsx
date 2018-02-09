import React from 'react';
import { connect } from 'react-redux';

import OverviewHeading from '../../elements/OverviewHeading/index';

import fetchReports from '../../actions/report';

@connect(store => ({
  reports: store.report.reports,
  projects: store.project.projects,
}))
export default class TimeWorkedOverview extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchReports()); // eslint-disable-line react/prop-types
  }

  render() {
    return (
      <div className="time-worked-container">
        <OverviewHeading>Time Worked</OverviewHeading>
      </div>
    );
  }
}
