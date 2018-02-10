import React from 'react';
import PropTypes from 'prop-types';

const OverviewHeading = props => (
  <h2 className="overview-heading">{props.children}</h2>
);

OverviewHeading.propTypes = {
  children: PropTypes.string.isRequired,
};

export default OverviewHeading;
