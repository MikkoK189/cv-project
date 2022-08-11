import React, { Component } from "react";
import "../styles/General.css";

class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { personName, title, address, city, email } = this.props;

    return (
      <div className="general">
        <h1>{personName}</h1>
        <p>{title}</p>
        <p>{address}</p>
        <p>{city}</p>
        <p>{email}</p>
      </div>
    );
  }
}

export default General;
