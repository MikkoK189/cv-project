import React, { Component } from "react";
import Experience from "./components/Experience";
import ExperienceForm from "./components/ExperienceForm";
import General from "./components/General";
import GeneralForm from "./components/GeneralForm";
import "./styles/App.css";
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props);

    this.changeOnGeneral = this.changeOnGeneral.bind(this);
    this.changeOnExperience = this.changeOnExperience.bind(this);
    this.addExperience = this.addExperience.bind(this);

    this.state = {
      general: {
        personName: "Matti Meikäläinen",
        title: "Pizza Man",
        address: "123, Pizzakatu",
        city: "00000, Pizzala",
        email: "matti.meikalainen@pizza.fi",
      },
      experience: [],
      experienceList: [],
      experienceForms: [],
    };
  }

  changeOnGeneral = (event) => {
    this.setState({
      general: {
        ...this.state.general,
        [event.target.name]: event.target.value,
      },
    });
  };

  changeOnExperience = (event) => {
    this.setState({
      experience: this.state.experience.map((item) => {
        console.log(event.target.parentNode.id);
        if (item.id == event.target.parentNode.id) {
          console.log("MITÄ VITTUA");
          return {
            ...item,
            [event.target.name]: event.target.value,
          };
        } else {
          return item;
        }
      }),
    });
    console.log(this.state.experience);
  };

  addExperience = () => {
    console.log(this.state.experience.length);
    this.setState({
      experience: this.state.experience.concat({
        company: "Pizza Oy",
        from: "2000",
        to: "2022",
        title: "Pizza baker",
        description: "I baked a lot of pizza",
        id: this.state.experience.length,
      }),
      experienceForms: this.state.experienceForms.concat(
        <ExperienceForm
          onUpdate={this.changeOnExperience}
          key={uniqid()}
          id={this.state.experience.length}
        />
      ),
      experienceList: this.state.experienceList.concat(
        this.state.experience.length
      ),
    });
  };

  render() {
    return (
      <div className="content">
        <div className="left">
          <GeneralForm onUpdate={this.changeOnGeneral} />
          <hr className="divider"></hr>
          <button onClick={this.addExperience}>Add</button>
          {this.state.experienceForms}
        </div>
        <div className="right">
          <General {...this.state.general} />
          <hr className="divider"></hr>
          <h1>Experience:</h1>
          {this.state.experienceList.map((listItem) => {
            return (
              <Experience
                {...this.state.experience[listItem]}
                key={uniqid()}
                id={listItem}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
