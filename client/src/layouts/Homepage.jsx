import React from 'react';

import NavigationBar from '../components/NavigationBar';
import HomepageTimer from '../components/HomepageTimer';
import HomepageFeatures from '../components/HomepageFeatures';

export default class Homepage extends React.Component {
  render() {
    return (
      <div className="home-container">
        <NavigationBar />
        <HomepageTimer />
        <HomepageFeatures />
      </div>
    );
  }
}
