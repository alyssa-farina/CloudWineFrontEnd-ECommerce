import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userPostFetch } from '../config/actions';
import { Col, Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

class Signup extends Component {
  state = {
    username: '',
    password: ''
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let a = this.props.userPostFetch(this.state);
    let b = this.props.history.push('/home');
    return a && b;
  };

  render() {
    return (
      <Container>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <form
            className="form-signin lower-content"
            onSubmit={this.handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal">Create an Account</h1>

            <label className="sr-only">Username</label>
            <input
              className="form-control"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <br />

            <label className="sr-only">Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <br />
            <Button
              className="btn btn-lg btn-primary btn-block white-button"
              type="submit">
              Sign Up
            </Button>
            <br/>
            <img src = "https://media.tenor.com/images/67ccb3415f3497680869248827ab4176/tenor.gif" width="150px" height="150px"/>
          </form>
          <br />
          <h4 align="center"className="linktologin"><Link to="/login">Already have an account? Click here</Link></h4>
        </Col>
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userPostFetch: userInfo => {
      dispatch(userPostFetch(userInfo));
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Signup);
