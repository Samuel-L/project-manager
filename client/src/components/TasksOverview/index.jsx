import React from 'react';

import OverviewHeading from '../../elements/OverviewHeading/index';

export default class TasksOverview extends React.Component {
  render() {
    return (
      <div className="tasks-container">
        <OverviewHeading>Tasks</OverviewHeading>
      </div>
    );
  }
}
