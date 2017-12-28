import React from 'react';

export default class Tooltip extends React.Component {
  render() {
    return <div className='tooltip'>{this.props.tooltipText}
    				<span className='tooltip-text'>{this.props.tooltipContent}</span>
    			</div>
  }
}
