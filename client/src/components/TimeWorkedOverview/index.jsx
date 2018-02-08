import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import OverviewHeading from '../../elements/OverviewHeading/index';
import LineChart from '../../elements/LineChart/index';

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
        <LineChart reports={this.props.reports} />
      </div>
    );
  }
}

TimeWorkedOverview.propTypes = {
  reports: PropTypes.string,
};

TimeWorkedOverview.defaultProps = {
  reports: '',
};
