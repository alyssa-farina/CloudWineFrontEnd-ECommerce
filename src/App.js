import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { NavLink as RRNavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProfileFetch, logoutUser } from './config/actions';
import Router from './Router';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button,
  NavbarToggler,
  Collapse,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Jumbotron
} from 'reactstrap';
import logo from './logo2.png';
import productList from './features/product-list';
import ReturnsPage from './pages/returnspage'


class App extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapsed: true,
      dropdownOpen: false,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  componentDidMount = () => {
    this.props.getProfileFetch();
  };

  handleClick = event => {
    event.preventDefault();
    // Remove the token from localStorage
    let a = localStorage.removeItem('token');
    // Remove the user object from the Redux store
    let b = this.props.logoutUser();
    console.log(this.props.history);
    let c = this.props.history.push('/login');
    window.location.reload();
    return a && b && c;
  };

  handleRedirectClick = e => {
    window.location.href="/returns"
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Navbar
          color="white"
          light
          expand="md"
          sticky="top"
          className="bold navbar-custom">
          <NavbarBrand>
            <NavItem tag={RRNavLink} to="/" className="logo">
              <img src={logo} alt="logo" height="60" />
              Cloud Wine 
              <h6 className="shopping">Shopping & Wine Make Everything Fine</h6>
            </NavItem>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="nav-spacing">
                <NavLink tag={RRNavLink} to="/">
                  HOME
                </NavLink>
              </NavItem>
              
              <NavItem className="nav-spacing">
                {this.props.currentUser.username ? (
                  <NavLink tag={RRNavLink} to="/cart">
                    MY CART (
                    {this.props.cart.reduce((acc, item) => {
                      return acc + item.quantity;
                    }, 0)}
                    )
                  </NavLink>
                ) : (
                  <NavLink tag={RRNavLink} to="/login">
                    SIGN IN / REGISTER
                  </NavLink>
                )}
                   <NavLink tag={RRNavLink} to="/products">
                   Products
                  </NavLink>
                )}
           
              </NavItem>
              {this.props.currentUser.username ? (
                <NavLink>
                  <NavItem className="nav-spacing">
                    <Dropdown
                      isOpen={this.state.dropdownOpen}
                      toggle={this.toggle}>
                      <DropdownToggle className="white-button" caret>
                        MY ACCOUNT
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>
                          Welcome, {this.props.currentUser.username}
                        </DropdownItem>
                        <DropdownItem onClick={this.handleClick}>
                          Log Out
                        </DropdownItem>
                        <DropdownItem onClick={this.handleRedirectClick}>
                          Returns Info
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </NavItem>
                </NavLink>
              ) : null}
            </Nav>
          </Collapse>
        </Navbar>
        <Router />
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    cart: state.cart,
    currentUser: state.loggedin.currentUser
  };
}
const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  logoutUser: () => dispatch(logoutUser())
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(withRouter(App));
