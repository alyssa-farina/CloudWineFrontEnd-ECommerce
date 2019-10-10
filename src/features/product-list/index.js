import React from 'react';
import ProductListItem from './product-list-item';
import { connect } from 'react-redux';
import fetchApi from '../../modules/fetch-api';
import { Container, Row, Col } from 'reactstrap';

class ProductList extends React.Component {
  componentDidMount() {
    const { loadProducts } = this.props;
    fetchApi('get', 'http://localhost:3000/products').then(
      json => {
        loadProducts(json);
      }
    );
  }

  render() {
    const { removeFromCart, products, cart } = this.props;

    return (
      <Row className="content">
        {products.map((product, index) => (
          <ProductListItem
            product={product}
            key={index}
            addToCart={this.props.addToCart}
            removeFromCart={removeFromCart}
            cartItem={cart.filter(cartItem => cartItem.id === product.id)[0]}
          />
        ))}
      </Row>
    );
  }
}

// defines which keys out of redux store are allowed as props to current component -> cart key goes to cart reducer inside of //redux store
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
)(ProductList);
