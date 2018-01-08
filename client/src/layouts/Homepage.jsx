import React from 'react';

import NavigationBar from '../components/homepage/NavigationBar';
import HomepageTimer from '../components/homepage/HomepageTimer';
import HomepageFeatures from '../components/homepage/HomepageFeatures';

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
