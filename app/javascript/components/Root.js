import React from "react"
import PropTypes from "prop-types"
class Root extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
}

Root.propTypes = {
  greeting: PropTypes.string
};
export default Root
