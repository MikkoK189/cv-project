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
    };
  }

  changeOnGeneral = (event) => {
    this.setState((prevState) => ({
      general: {
        ...prevState.general,
        [event.target.name]: event.target.value,
      },
    }));
  };

  changeOnExperience = (event) => {
    this.setState((prevState) => ({
      experience: prevState.experience.map((item) => {
        if (item.id == event.target.parentNode.id) {
          return {
            ...item,
            [event.target.name]: event.target.value,
          };
        } else {
          return item;
        }
      }),
    }));
  };

  addExperience = () => {
    this.setState((prevState) => ({
      experience: [
        ...prevState.experience,
        {
          company: "Pizza Oy",
          from: "2000",
          to: "2022",
          title: "Pizza baker",
          description: "I baked a lot of pizza",
          id: uniqid(),
        },
      ],
    }));
  };

  render() {
    return (
      <div className="content">
        <div className="left">
          <GeneralForm onUpdate={this.changeOnGeneral} />
          <hr className="divider"></hr>
          <button onClick={this.addExperience}>Add</button>
          {this.state.experience.map((listItem) => {
            return (
              <ExperienceForm
                onUpdate={this.changeOnExperience}
                id={listItem.id}
              />
            );
          })}
        </div>
        <div className="right">
          <General {...this.state.general} />
          <hr className="divider"></hr>
          <h1>Experience:</h1>
          {this.state.experience.map((listItem) => {
            return <Experience {...listItem} id={listItem.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
