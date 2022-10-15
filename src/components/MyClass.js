import React, { Component } from "react";

class MyClass extends Component {
  render() {
    return (
      <div>
        <h4 className="bg-primary text-white text-center">
          My email is {this.props.email}
        </h4>
        <button className="btn btn-primary" onClick={this.props.myClick}>
          Just Click
        </button>
      </div>
    );
  }
}

export default MyClass;
