import React from 'react';
import PropTypes from 'prop-types';

export default class Report extends React.Component {
  render() {
    return (
      <li className="report">
        <h3 className="report__heading">{this.props.children}</h3>
        <div className="report__info-container">
          <p className="report__info">
            <span className="report__label">Last 7 days:</span> {this.props.lastSevenDays}
          </p>
          <p className="report__info">
            <span className="report__label">Total:</span> {this.props.total}
          </p>
        </div>
      </li>
    );
  }
}

Report.propTypes = {
  children: PropTypes.string.isRequired,
  lastSevenDays: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
};
