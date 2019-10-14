import React from 'react';
import ProductList from '../features/product-list';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';


export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: ""
    };

    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }

  
 handleDropdownChange = e => {
   e.preventDefault();
   this.setState({ 
     selectValue: e.target.value
   })
 }
render(){
  console.log(this.state)
  return (
    
   <div>
     
  <form>
      <label>
        Sort by Category:
        <select id="dropdown" onChange={this.handleDropdownChange}>
          <option value="wines">Wines</option>
          <option value="wineglasses">Wine Glasses</option>
          <option value="winetotes">Wine Totes</option>
          <option value="wineart">Wine House Decor</option>
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
  
}
