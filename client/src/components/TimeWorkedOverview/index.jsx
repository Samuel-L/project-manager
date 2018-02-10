import React from 'react';
import PropTypes from 'prop-types';

import OverviewHeading from '../../elements/OverviewHeading/index';
import Report from '../../elements/Report/index';


const TimeWorkedOverview = props => (
  <div className="time-worked-container">
    <OverviewHeading>Time Worked</OverviewHeading>
    <ul className="reports">
      {
        (props.projects !== '' && props.projects !== null)
        ?
          JSON.parse(props.projects).map(project => (
            <Report
              lastSevenDays={`${project.worked_since_start_of_week / 60} hours`}
              total={`${project.total_worked_time / 60} hours`}
              key={project.id}
            >
              { project.project_name }
            </Report>
          ))
        :
          <li className="no-projects-notice">
            It seems like you have no projects!
          </li>
      }
    </ul>
  </div>
);

TimeWorkedOverview.propTypes = {
  projects: PropTypes.string.isRequired,
};

export default TimeWorkedOverview;
