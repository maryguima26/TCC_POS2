import React, { Component } from "react";

class Name extends Component {
  constructor() {
    super();
    this.state = {
      name: "Guima",
    };
  }

  clickedMe = () => {
    this.setState({
      // name: "Changed Text",
      name: this.state.name === "Guima" ? "John Doe" : "Guima",
    });
  };
  render() {
    return (
      <div>
        <h1 className="bg-primary text-white text-center">{this.state.name}</h1>
        <button className="btn btn-success" onClick={this.clickedMe}>
          Change Text
        </button>
      </div>
    );
  }
}

export default Name;
