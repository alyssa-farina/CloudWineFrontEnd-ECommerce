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
            <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>

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
          </form>
          <br />
          Have an account already? <Link to="/login">Sign In</Link>
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
