import React, { Component } from "react";
import "../styles/GeneralForm.css";

class GeneralForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const { onUpdate } = this.props;
    return (
      <div>
        <form className="general-form">
          <label htmlFor="personName">Full Name</label>
          <input
            onChange={onUpdate}
            type="text"
            id="personName"
            name="personName"
          ></input>

          <label htmlFor="title">Title</label>
          <input
            onChange={onUpdate}
            type="text"
            id="title"
            name="title"
          ></input>

          <label htmlFor="address">Address</label>
          <input
            onChange={onUpdate}
            type="text"
            id="address"
            name="address"
          ></input>

          <label htmlFor="city">City & Zip code</label>
          <input onChange={onUpdate} type="text" id="city" name="city"></input>

          <label htmlFor="email">E-mail</label>
          <input
            onChange={onUpdate}
            type="email"
            id="email"
            name="email"
          ></input>
        </form>
      </div>
    );
  }
}

export default GeneralForm;
