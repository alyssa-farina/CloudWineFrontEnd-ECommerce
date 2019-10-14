import React from 'react';
import ProductList from '../features/product-list';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';


export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectName: ""
    };

    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }

  
 handleDropdownChange = e => {
   e.preventDefault();
   this.setState({ 
     selectValue: [e.target.name]
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
          <option name="wine" value="wines">Wines</option>
          <option name="wineglasses" value="wineglasses">Wine Glasses</option>
          <option name="winetotes" value="winetotes">Wine Totes</option>
          <option name ="winetotes" value="wineart">Wine House Decor</option>
        </select>
      </label>
     
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
