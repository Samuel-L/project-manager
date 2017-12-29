import React from 'react';
import PropTypes from 'prop-types';

export default class Tooltip extends React.Component {
  render() {
    return (
      <div className="tooltip">{this.props.tooltipText}
        <span className="tooltip-text">{this.props.tooltipContent}</span>
      </div>
    );
  }
}

Tooltip.propTypes = {
  tooltipText: PropTypes.string.isRequired,
  tooltipContent: PropTypes.string.isRequired,
};
