import React from 'react';
import PropTypes from 'prop-types';

export default class SiteTitle extends React.Component {
  render() {
    return <h2 className="site-title">{this.props.children}</h2>;
  }
}

SiteTitle.propTypes = {
  children: PropTypes.string.isRequired,
};
