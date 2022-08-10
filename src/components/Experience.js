import React, { Component } from "react";
import "../styles/Experience.css";

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="experience">
        <h1>{this.props.company}</h1>
        <p>{this.props.title}</p>
        <p>
          {this.props.from} - {this.props.to}
        </p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Experience;
