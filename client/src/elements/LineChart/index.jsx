import React from 'react';
import PropTypes from 'prop-types';

import { LineChart as Chart, Line, XAxis, YAxis, Legend, Tooltip, Label } from 'recharts';

import appendOrdinalIndicator from '../../utils/dateHelpers';

export default class LineChart extends React.Component {
  CreateChartData() {
    const data = [];

    if (this.props.reports !== '[]' && this.props.reports !== null) {
      const reports = JSON.parse(this.props.reports);

      // First we sort the reports by date and project. Making sure to add two
      // reports together if they are reported on the same day.
      const sortedReports = {};
      for (const report of reports) {
        const { project } = report;
        const date = new Date(report.start.substring(0, 10));
        const minutesWorkedOnDate = report.total_in_seconds / 60;

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
      for (const project in sortedReports) {
        for (const report in sortedReports[project]) {
          let date = new Date(report);
          const minutesWorkedOnDate = sortedReports[project][date];
          date = appendOrdinalIndicator(date.getDate());
          data.push({ name: date, [project]: minutesWorkedOnDate });
        }
      }

      return data;
    }
    return data;
  }
  render() {
    const data = this.CreateChartData();

    return (
      <Chart width={600} height={300} data={data}>
        <XAxis dataKey="name">
          <Label value="Last 7 days" offset={-5} position="insideBottom" />
        </XAxis>
        <YAxis label={{ value: 'minutes', angle: -90, position: 'insideLeft' }} />
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
