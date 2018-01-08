import React from 'react';

export default class HomepageFeatures extends React.Component {
  render() {
    return (
      <div className="features-container">
        <div className="features">
          <div className="feature task-feature">
            <h2>Tasks</h2>
            <p>
              We offer a task system where you can create task and work on
              the task while counting the amount of time it takes to finish.
            </p>
          </div>
          <div className="feature project-feature">
            <h2>Projects</h2>
            <p>
              As a member on this website, you can create your own projects,
              track progress, time spent on the project and time spent on individual tasks.
            </p>
          </div>
          <div className="feature team-feature">
            <h2>Teams</h2>
            <p>
              We also offer a team system. Where you can create a team,
              invite members and work on the project together!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
