import React from 'react';
import PropTypes from 'prop-types';

const Report = props => (
  <li className="report">
    <h3 className="report__heading">{props.children}</h3>
    <div className="report__info-container">
      <p className="report__info">
        <span className="report__label">Last 7 days:</span> {props.lastSevenDays}
      </p>
      <p className="report__info">
        <span className="report__label">Total:</span> {props.total}
      </p>
    </div>
  </li>
);

Report.propTypes = {
  children: PropTypes.string.isRequired,
  lastSevenDays: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
};

export default Report;
