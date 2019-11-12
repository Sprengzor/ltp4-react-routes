import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class RepoDetail extends Component {
  state = {
    loading: true,
    repo: {}
  };

  async componentDidMount() {
    const name = this.props.match.params.name;
    const { data: repo } = await axios.get(
      `https://api.github.com/repos/sprengzor/${name}`
    );

    this.setState({ loading: false, repo });
  }

  render() {
    return (
      <>
        <h1>Repo Detail</h1>
        {this.state.loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p>Name: {this.state.repo.name}</p>
            <p>Language: {this.state.repo.language}</p>
            <p>Last Update: {this.state.repo.updated_at}</p>
            <p>Forks: {this.state.repo.forks}</p>

            <Link to="/repos">Back</Link>
          </div>
        )}
      </>
    );
  }
}

export default RepoDetail;
