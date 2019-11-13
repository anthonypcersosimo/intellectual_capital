import React, { Component } from "react";

import "./styles/landing.css";

class Landing extends Component {
  state = {
    page: "landing"
  };

  render() {
    return (
      <>
        <h1>This is the {this.state.page} page</h1>
        <br></br>
        <h3>
          Have industry knowledge to share? You've come to the right place.
        </h3>
        <h3>
          Need to utilize industry knowledge without hiring? You've come to the
          right place.
        </h3>
      </>
    );
  }
}

export default Landing;
