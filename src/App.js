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
import shoppinglogo from './shoppinglogo.png';
import productList from './features/product-list';
import WineQuizPage from './pages/winequizpage';
import WelcomePage from './pages/welcomepage';
import AddToCalendar from 'react-add-to-calendar';
import EventsPage from './pages/eventspage';
import AboutPage from './pages/aboutpage';





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
    // console.log(this.props.currentUser)
  };

  handleClick = event => {
    event.preventDefault();
    // Remove the token from localStorage
    let a = localStorage.removeItem('token');
    // Remove the user object from the Redux store
    let b = this.props.logoutUser();
    // console.log(this.props.history);
    let c = this.props.history.push('/login');
    window.location.reload();
    return a && b && c;
  };


  handleRedirectShopClick = e => {
    window.location.href="/products"
  }
  handleRedirectEventsClick = e => {
    window.location.href="/events"
  }
  handleRedirectAboutClick = e => {
    window.location.href="/about"
  }
  

  render() {
  //   let event = {
  //     title: 'Sip & Whine: A Book Club to Whine About',
  //     description: 'This event is held for people who love reading, love wine, and love to whine about the books that they have read! The book we are discussing is The Wine Bible. So if you havent already, pick one up and get to reading',
  //     location: 'New York, NY',
  //     startTime: '2019-10-26T20:15:00-04:00',
  //     endTime: '2019-10-26T21:45:00-04:00'
  // };
    // console.log(this.state)
    return (
      <div>
        
        <Navbar color="white"
          light
          expand="md"
          sticky="top"
          className="navbar-custom">
             <NavItem tag={RRNavLink} to="/" className="logo">
               Cloud Wine
              <img src={shoppinglogo} alt="shoplogo" height="90" />           
              </NavItem>
          {/* <NavbarBrand>
           
              Cloud Wine 
              <h6 className="shopping">Shopping & Wine Make Everything Fine</h6>
            </NavItem>
          </NavbarBrand> */}
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="nav-spacing">
                <NavLink tag={RRNavLink} to="/home" className="home">
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
                    LOGIN/SIGN UP
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
                        My Account
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>
                          <b>
                          Welcome, {this.props.currentUser.username}
                          </b>
                        </DropdownItem>
                        
                        <DropdownItem onClick={this.handleRedirectAboutClick}
                        currentUser={this.props.currentUser.username}>
                          About Cloud Wine☁️
                        </DropdownItem>
                        <DropdownItem onClick={this.handleRedirectShopClick}>
                          Shop🛍
                        </DropdownItem>
                        <DropdownItem>
                     
                        </DropdownItem>
                      
                        <DropdownItem onClick={this.handleRedirectEventsClick}>
                     
                          Events📆
                        </DropdownItem>
                        <DropdownItem onClick={this.handleClick}>
                          Log Out😭👋🏻
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
