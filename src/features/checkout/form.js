import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function CheckoutForm(props) {
  const { handleSubmit } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <Link to="/cart">
            <Button className="white-button top-spacing">Back to Cart</Button>
          </Link>
          <Button className="black-button right-button" type="submit">
            Submit order
          </Button>
        </div>
      </form>
    </div>
  );
}

CheckoutForm = reduxForm({
  form: 'checkout'
})(CheckoutForm);

export default CheckoutForm;