import React, { Component } from "react";
import "../styles/Experience.css";

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { company, title, from, to, description } = this.props;

    return (
      <div className="experience">
        <h1>{company}</h1>
        <p>{title}</p>
        <p>
          {from} - {to}
        </p>
        <p>{description}</p>
      </div>
    );
  }
}

export default Experience;
