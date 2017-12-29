import React from 'react';

export default class Modal extends React.Component {
  render() {
    return  <div
        id={this.props.modalID}
        className='modal'
        style={{display: this.props.isOpen ? 'block' : 'none'}}>
        <div className='modal-content'>
          <span className="close" onClick={this.props.modalHandler}>&times;</span>
          {this.props.children}
        </div>
      </div>
  }
}
