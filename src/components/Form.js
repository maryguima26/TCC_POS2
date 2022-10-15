import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      post: [],
    };
  }

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ post: data }));
  // }

  usernameHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  passwordHandler = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  render() {
    const { post } = this.state;

    return (
      <div className="container">
        <input
          value={this.state.username}
          onChange={this.usernameHandler}
          className="form-control"
          type="text"
          placeholder="Enter your username"
        />
        <input
          value={this.state.password}
          onChange={this.passwordHandler}
          className="form-control"
          type="password"
          placeholder="Enter your password"
        />
        <button className="btn btn-primary">Click Me!</button>

        {post.map((post) => (
          <h2 key={post.id}>{post.title}</h2>
        ))}
      </div>
    );
  }
}

export default Form;
