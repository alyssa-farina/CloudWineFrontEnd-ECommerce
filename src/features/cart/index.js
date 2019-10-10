import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Table, ButtonGroup } from 'reactstrap';

// sort so they don't jump around
function sort(items) {
  return items.sort(function(a, b) {
    return a.id - b.id;
  });
}

function Cart(props) {
  return (
    <div>
      <Table light>
        <thead>
          <tr>
            <th> </th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {sort(props.cart).map(item => (
            <tr>
              <td>
                <Button
                  className="btn-circle cart-button"
                  onClick={e => props.removeAllFromCart(item)}>
                  <i className="material-icons">clear</i>
                </Button>
              </td>
              <td>{item.name}</td>

              <td>
                {item.quantity}
                <ButtonGroup>
                  <Button
                    className="quantity-buttons"
                    onClick={e => props.removeFromCart(item)}>
                    -
                  </Button>

                  <Button
                    className="quantity-buttons"
                    onClick={e => props.addToCart(item)}>
                    +
                  </Button>
                </ButtonGroup>
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}
// dispatch to send action to reducer
function mapDispatchToProps(dispatch) {
  return {
    addToCart: item => {
      dispatch({ type: 'ADD', payload: item });
    },
    removeFromCart: item => {
      dispatch({ type: 'REMOVE', payload: item });
    },
    removeAllFromCart: item => {
      dispatch({ type: 'REMOVE_ALL', payload: item });
    }
  };
}
// returns another function which is then called with cart passed into it
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
