import React, { Component } from 'react';
export default class Add extends Component {
  state = { title: null, repoLanguage: null, status: "Public" }
  changeTitle = (event) => {
    this.setState({ title: event.target.value });
  }
  changeRepoLanguage = (event) => {
    this.setState({ repoLanguage: event.target.value });
    // console.log(event.target.value);
  }
  changeStatus = (event) => {
    //this.setState({ repo: event.target.value });
    let statusValue = event.target.value

    // this.setState({ status: "Public" })

    // else {
    this.setState({ status: statusValue })
    //  }
  }
  render() {
    return (
      <div style={{ border: '3px orange solid' }}>
        <input type="text" placeholder="Title" onChange={this.changeTitle} />
        <input type="text" placeholder="Repository" onChange={this.changeRepoLanguage} />
        <select onChange={this.changeStatus}>
          <option>RepoStatus Private Public</option>
          <option>Public</option>
          <option>Private</option>
        </select>
        <button onClick={() => {
          let new_repo = {
            id: Math.random() * 50000,
            title: this.state.title,
            status: this.state.status,
            language: this.state.repoLanguage
          }
          if (new_repo.title !== null && new_repo.status !== null && new_repo.language !== null) {
            this.props.addNewRepo(new_repo);
          }

        }}>ADD Repo</button>
      </div>
    );
  }
}
