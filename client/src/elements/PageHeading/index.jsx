import React from 'react';
import PropTypes from 'prop-types';

const PageHeading = props => (
  <h1 className="page-heading">{props.children}</h1>
);

PageHeading.propTypes = {
  children: PropTypes.string.isRequired,
};

export default PageHeading;
