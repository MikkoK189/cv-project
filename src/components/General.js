import React, { Component } from "react";
import "../styles/General.css";

class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="general">
        <h1>{this.props.personName}</h1>
        <p>{this.props.title}</p>
        <p>{this.props.address}</p>
        <p>{this.props.city}</p>
        <p>{this.props.email}</p>
      </div>
    );
  }
}

export default General;
