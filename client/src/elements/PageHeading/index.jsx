import React from 'react';
import PropTypes from 'prop-types';

export default class PageHeading extends React.Component {
  render() {
    return (
      <h1 className="page-heading">{this.props.children}</h1>
    );
  }
}

PageHeading.propTypes = {
  children: PropTypes.string.isRequired,
};
