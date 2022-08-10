import React, { Component } from "react";
import "../styles/ExperienceForm.css";

class ExperienceForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const { onUpdate } = this.props;
    return (
      <div>
        <form className="general-form">
          <label htmlFor="company">Company</label>
          <input
            onChange={onUpdate}
            type="text"
            id="company"
            name="company"
          ></input>

          <label htmlFor="title">Title</label>
          <input
            onChange={onUpdate}
            type="text"
            id="title"
            name="title"
          ></input>

          <div className="side-by-side">
            <div>
              <label htmlFor="from">Started on year</label>
              <input
                onChange={onUpdate}
                type="number"
                id="from"
                name="from"
              ></input>
            </div>

            <div>
              <label htmlFor="to">Ended on year</label>
              <input
                onChange={onUpdate}
                type="number"
                id="to"
                name="to"
              ></input>
            </div>
          </div>

          <label htmlFor="description">Description</label>
          <textarea
            className="tall"
            onChange={onUpdate}
            type="text"
            id="description"
            name="description"
          ></textarea>
        </form>
      </div>
    );
  }
}

export default ExperienceForm;
