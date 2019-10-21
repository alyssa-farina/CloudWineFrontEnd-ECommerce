import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function CheckoutForm(props) {
  const { handleSubmit } = props;
 

  return (
    <div>
   
      
      <form onSubmit={handleSubmit}>
        <div className="checkoutdiv">
          
          <hr/>
          <br/>
        <label> <b>
        Name on card:
      <input type="text"/>
      </b>
      </label>
      <b>
      <label>
        Credit Card #:
      <input type="telephone"/>
      </label>
      </b>
      
      <label>
      <b>
        Expiration Date:
      <input type="date"/>
      </b>
      </label>
      
      <b>
      <label>
        CVC:
      <input type="password"/>
      
      </label>
      </b>

      <br/>
      <br/>
            <br/>
          <Link to="/cart">
           
            <Button className="white-button top-spacing">Back to Cart</Button>
          </Link>
          <br/>
          <br/>
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