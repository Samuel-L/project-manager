import React from 'react';
import PropTypes from 'prop-types';

export default class Modal extends React.Component {
  render() {
    return (
      <div
        id={this.props.modalID}
        className="modal"
        style={{ display: this.props.isOpen ? 'block' : 'none' }}
      >
        <div className={this.props.success ? 'modal-content modal-content-success' : 'modal-content'}>
          <span className="close" onClick={this.props.modalHandler}>&times;</span>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  modalID: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
  modalHandler: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
