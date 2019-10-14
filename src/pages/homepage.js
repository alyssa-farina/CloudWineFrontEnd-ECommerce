import React from 'react';
// import ProductList from '../features/product-list';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';

export default function Homepage(props) {
  return (
    <div>
      <div>
        <Jumbotron className="jumbo-image small-jumbo-image">
          <h1 className="welcomeheader">Welcome</h1>
          <p className="quizinfo">
           <a href="/winequiz">Click here to be WINEALYZED</a>
          </p>
          
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