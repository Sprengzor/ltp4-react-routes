import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class ListRepo extends Component {
  state = {
    repos: []
  };

  async componentDidMount() {
    const { data: repos } = await axios.get(
      "https://api.github.com/users/sprengzor/repos"
    );

    this.setState({ repos });
  }

  render() {
    return (
      <>
        <h1>List Repos</h1>
        <ul>
          {this.state.repos.map(repo => (
            <li key={repo.id}>
              <Link to={`/repos/${repo.name}/details`}>{repo.name}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default ListRepo;
