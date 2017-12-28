import React from 'react';
import ReactModal from 'react-modal';

import { getTimeDifference } from '../utils/convert-time.js';

export default class FinishedTaskModal extends React.Component {
  render() {
    let difference = getTimeDifference(this.props.startTime, this.props.endTime)
    return <ReactModal
      isOpen={this.props.isOpen}
      >
      <h1>Information</h1>
      <ul>
        <li><strong>Task name: </strong>{this.props.taskName}</li>
        <li><strong>Duration: </strong>
          {difference.minutes} minutes and {difference.seconds} seconds</li>
      </ul>

      <button
        className='modal-close-button'
        onClick={this.props.modalCloseHandler}>Close</button>
    </ReactModal>
  }
}
