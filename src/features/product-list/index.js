import React from 'react';
import ProductListItem from './product-list-item';
import { connect } from 'react-redux';
import fetchApi from '../../modules/fetch-api';
import { Container, Row, Col } from 'reactstrap';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
      search: ''
    };
}

updateSearch(event) {
  console.log(event.target.value)
  this.setState({
    search: event.target.value.substr(0, 20)
  })
}
  
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
    let filteredProducts = this.props.products.filter(
      (product) => {
        return product.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    )
    return (
      <div>
      <div className="searchbar">
      <input type="text" placeholder="search by name"
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}/>
              </div>
     
      <Row className="content">
       
        {filteredProducts.map((product, index) => (
          <ProductListItem
            product={product}
            key={index}
            addToCart={this.props.addToCart}
            removeFromCart={removeFromCart}
            cartItem={cart.filter(cartItem => cartItem.id === product.id)[0]}
          />
          
         
              
        ))}
        
      </Row>
      </div>
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
