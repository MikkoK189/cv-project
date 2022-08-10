import React, { Component } from "react";
import Experience from "./components/Experience";
import ExperienceForm from "./components/ExperienceForm";
import General from "./components/General";
import GeneralForm from "./components/GeneralForm";
import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.changeOnGeneral = this.changeOnGeneral.bind(this);
    this.changeOnExperience = this.changeOnExperience.bind(this);

    this.state = {
      general: {
        personName: "Matti Meikäläinen",
        title: "Pizza Man",
        address: "123, Pizzakatu",
        city: "00000, Pizzala",
        email: "matti.meikalainen@pizza.fi",
      },
      experience: {
        company: "Pizza Oy",
        from: "2000",
        to: "2022",
        title: "Pizza baker",
        description: "I baked a lot of pizza",
      },
    };
  }

  changeOnGeneral = (event) => {
    this.setState({
      general: {
        ...this.state.general,
        [event.target.name]: event.target.value,
      },
    });
    console.log(this.state);
  };

  changeOnExperience = (event) => {
    this.setState({
      experience: {
        ...this.state.experience,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    return (
      <div className="content">
        <div className="left">
          <GeneralForm onUpdate={this.changeOnGeneral} />
          <hr className="divider"></hr>
          <ExperienceForm onUpdate={this.changeOnExperience} />
        </div>
        <div className="right">
          <General {...this.state.general} />
          <hr className="divider"></hr>
          <h1>Experience:</h1>
          <Experience {...this.state.experience} />
        </div>
      </div>
    );
  }
}

export default App;
