import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Axios from "axios";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      const { data } = await Axios.post("http://localhost:3333/sessions", {
        email,
        password
      });

      localStorage.setItem(
        "unifeob-app-user",
        JSON.stringify({
          data
        })
      );

      this.setState({ error: "" });
      this.props.history.push("/repos");
      
    } catch (err) {
      this.setState({ error: "Invalid credentials" });
    }
  };

  render() {
    return (
      <>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="e-mail@company.com"
            value={this.state.email}
            onChange={e =>
              this.setState({ ...this.state, email: e.target.value })
            }
          />
          <input
            type="password"
            value={this.state.password}
            onChange={e =>
              this.setState({ ...this.state, password: e.target.value })
            }
          />
          {this.state.error && <p>{this.state.error}</p>}
          <input type="submit" value="Login" />
        </form>
      </>
    );
  }
}

export default withRouter(Login);
