import React from 'react';
// import ProductList from '../features/product-list';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';

export default function Homepage(props) {
  return (
    <div>
      <div>
        <Jumbotron className="jumbo-image small-jumbo-image">
          <h1 className="display-3  jumbo-head-text">Welcome</h1>
          <p className="lead jumbo-body-text">
           
          </p>
          <hr className="my-2" />
        </Jumbotron>
      </div>
      <Container>
        <Col>
          {/* <ProductList /> */}
        </Col>
      </Container>
    </div>
  );
}