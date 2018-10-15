import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { SIGNIN_USER } from "../../queries";
import Error from "../Error";
import { withRouter } from 'react-router-dom'

const initalState = {
  email: "",
  password: ""
};

class Signin extends Component {
  state = { ...initalState };

  clearState = () => {
    this.setState({ ...initalState });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e, signInUser) => {
    e.preventDefault();
    signInUser().then(async ({ data }) => {
      console.log({ data });
      localStorage.setItem("Token", data.signInUser.token);
      await this.props.refetch();
      this.clearState();
      this.props.history.push('/');
    });
  };

  validateForm = () => {
    const { username, password } = this.state;
    const isInvalid = !username || !password;
    return isInvalid;
  };

  render() {
    const { username, password } = this.state;

    return (
      <div className="App">
        <h2 className="App">Signin</h2>
        <Mutation mutation={SIGNIN_USER} variables={{ username, password }}>
          {(signInUser, { date, loading, error }) => {
            return (
              <form
                className="form"
                onSubmit={e => this.handleSubmit(e, signInUser)}
              >
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  value={username}
                  onChange={this.handleChange}
                />

                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={password}
                  onChange={this.handleChange}
                />
                <button
                  className="button-primary"
                  type="submit"
                  disabled={loading || this.validateForm()}
                >
                  Submit
                </button>
                {error && <Error error={error} />}
              </form>
            );
          }}
        </Mutation>
      </div>
    );
  }
}

export default withRouter(Signin);
