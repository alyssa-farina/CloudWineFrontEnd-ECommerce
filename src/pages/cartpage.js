import React from 'react';
import Cart from '../features/cart';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import sadBaby from '../crying baby.png';
import ProductListItem from '../features/product-list/product-list-item';

class CartPage extends React.Component {

  render() {
    return (
      <Container>
        {console.log(this.props.cart)}
        {this.props.cart.length === 0 ? (
          <Container>
            <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <h2 className="center-text"></h2>
                <br/>
                <br/>
                <br/>
                <br/>
                <img src={sadBaby} alt="sad baby" className="baby-pic" />
              </Col>
            </Row>
            <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <Link to="/products">
                  <Button className="black-button center-button">
                    Continue Shopping
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        ) : (
          <div className="lower-content-50">
            <h2>Cart</h2>
            <Cart />
          </div>
        )}
        {this.props.cart.length === 0 ? null : (
          <div>
            <Link to="/">
              <Button className="white-button top-spacing">
                Continue Shopping
              </Button>
            </Link>
            <Link to="/checkout">
              <Button className="black-button right-button">Checkout</Button>
            </Link>
            <div className="cart-spacing">
            {window.scrollTo(0, 0)}
              {/* <h4>You might also like:</h4> */}
            </div>
            <Row className="content">
              {this.props.products
                .map((product, index) => (
                
                  <ProductListItem
                    className="product-suggestion"
                    product={product}
                    key={index}
                    addToCart={this.props.addToCart}
                    removeFromCart={this.props.removeFromCart}
                    cartItem={
                      this.props.cart.filter(
                        cartItem => cartItem.id === product.id
                      )[0]
                    }
                  />
                ))
                .slice(30, 33)}
            </Row>
          </div>
        )}
      </Container>
    );
  }
}

function mapStatetoProps(state) {
  return {
    cart: state.cart,
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadProducts: products => {
      dispatch({ type: 'LOAD', payload: products });
    },
    addToCart: item => {
      dispatch({ type: 'ADD', payload: item });
    },
    removeFromCart: item => {
      dispatch({ type: 'REMOVE', payload: item });
    }
  };
}

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(CartPage);