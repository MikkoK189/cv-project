import React, { Component } from "react";
import General from "./components/General";
import GeneralForm from "./components/GeneralForm";
import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.changeOnGeneral = this.changeOnGeneral.bind(this);

    this.state = {
      general: {
        personName: "Matti Meikäläinen",
        title: "Pizza Man",
        address: "123, Pizzakatu",
        city: "00000, Pizzala",
        email: "matti.meikalainen@pizza.fi",
      },
      other: {
        test: "LOL",
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

  render() {
    return (
      <div className="content">
        <div className="left">
          <GeneralForm onUpdate={this.changeOnGeneral} />
        </div>
        <div className="right">
          <General {...this.state.general} />
        </div>
      </div>
    );
  }
}

export default App;
