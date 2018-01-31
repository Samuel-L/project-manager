import React from 'react';
import PropTypes from 'prop-types';

export default class ErrorMsg extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: '',
    };
  }

  componentWillMount() {
    const error = this.props.error.request.responseText;
    const json = JSON.parse(error);
    if (json.email) {
      this.setState({ msg: json.email[0] });
    } else if (json.username) {
      this.setState({ msg: json.username[0] });
    }
  }

  render() {
    return (
      <span className="error-msg">{this.state.msg}</span>
    );
  }
}

ErrorMsg.propTypes = {
  error: PropTypes.string.isRequired,
};
