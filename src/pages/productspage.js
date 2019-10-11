import React from 'react';
import ProductList from '../features/product-list';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';

export default function Homepage(props) {
  return (
    <div>
    <form>
        <label>
          Sort by Category:
          <select>
            <option value="grapefruit">Wines</option>
            <option value="lime">Wine Glasses</option>
            <option value="coconut">Wine Totes</option>
            <option value="mango">Wine House Decor</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
      <Container>
        <Col>
        <ProductList/>
        </Col>
      </Container>
    </div>
  );
}
