import React from 'react';
import { connect } from 'react-redux';
import Cart from '../cart';
import CheckoutForm from './form';
import fetchApi from '../../modules/fetch-api';
import { Button, Table, Container } from 'reactstrap';

function submitOrder(item, currentUser) {
  fetchApi('POST', 'http://localhost:3000/orders', {
    product_id: item.id,
    quantity: item.quantity,
    user_id: currentUser.id
  }).then(json => {
    if (json.errors) {
      alert('something is wrong');
      return;
    }
    console.log(json.user);
    document.location.href = `/orders/${json.user.id}`;
  });
}

function mapOrders(cart, currentUser) {
  cart.map(item => {
    submitOrder(item, currentUser);
  });
}

function Checkout(props) {
  let sum = null;
  {
    props.cart.map(item => (sum += item.price * item.quantity));
  }
  return (
    <Container>
      <div
        style={{ border: '1px solid black', padding: '15px' }}
        className="lower-content-50">
        <div>
          <h2>Checkout</h2>
          <Table light>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {props.cart.map(item => (
                <tr>
                  <td>{item.name}</td>
                  <td> {item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
              <tr>
                <td className="bold-text">Total Price:</td>
                <td />
                <td className="bold-text">${sum.toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>

      <CheckoutForm
        onSubmit={currentUser => mapOrders(props.cart, props.currentUser)}
      />
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    currentUser: state.loggedin.currentUser
  };
}

// connect this component to redux store
export default connect(mapStateToProps)(Checkout);