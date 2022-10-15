import React, { Component } from "react";

export class Example2 extends Component {
  myElement(names) {
    return names.map((name) => <div key={name}>{`${name}`}</div>);
  }
  render() {
    return (
      <div>
        <h4>{this.myElement(this.props.names)}</h4>
      </div>
    );
    <div>Example2</div>;
  }
}

export default Example2;
