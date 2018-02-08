import React from 'react';
import PropTypes from 'prop-types';

import { LineChart as Chart, Line, XAxis, YAxis, Legend, Tooltip } from 'recharts';

import appendOrdinalIndicator from '../../utils/dateHelpers';

export default class LineChart extends React.Component {
  render() {

    if (this.props.reports !== '[]' && this.props.reports !== null) {
      const reports = JSON.parse(this.props.reports);
      var data = [];

      // First we sort the reports by date and project. Making sure to add two
      // reports together if they are reported on the same day.
      let sortedReports = {};
      for (let report of reports) {
        let project = report.project;
        let date = new Date(report.start.substring(0, 10));
        let minutesWorkedOnDate = report.total_in_seconds / 60;

        if (!sortedReports[project]) {
          sortedReports[project] = {};
        }

        if (sortedReports[project][date]) {
          sortedReports[project][date] = minutesWorkedOnDate + sortedReports[project][date];
        } else {
          sortedReports[project][date] = minutesWorkedOnDate;
        }
      }

      // Now we add the sorted reports to the data variable that will be used by
      // recharts.
      for (let project in sortedReports) {
        for (let report in sortedReports[project]) {
          let date = new Date(report);
          let minutesWorkedOnDate = sortedReports[project][date];
          date = appendOrdinalIndicator(date.getDate());
          data.push({name: date, [project]: minutesWorkedOnDate});
        }
      }
    }

    return (
      <Chart width={600} height={300} data={data}>
        <XAxis dataKey="name"/>
        <YAxis label={{ value: 'minutes', angle: -90, position: 'insideLeft' }}/>
        <Legend verticalAlign="top" height={36} />
        <Tooltip />
        <Line type="monotone" dataKey="22" />
      </Chart>
    );
  }
}

LineChart.propTypes = {
  reports: PropTypes.string.isRequired,
};
