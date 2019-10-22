import React from 'react';
import ProductList from '../features/product-list';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';


export default class Homepage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      category: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.name});
  }

  handleSubmit(event) {
    alert('The category is: ' + this.state.name);
    event.preventDefault();
  }

render(){
console.log(this.state)
  return (
    
   <div>
     <p className="searchinput">Use this search bar to show you products like 'Pinot Grigio', 'Cabernet', 'Pinot Noir', 'Chardonnay', 'Wine glass', 'Wine Totes' </p>
     
     {/* <form onSubmit={this.handleSubmit}>
      <label>
        Sort by Category:
        <select value={this.state.value} onChange={this.handleChange}>
          <option name="wine" value={this.state.name}>Wines</option>
          <option name="wineglasses" value="wineglasses">Wine Glasses</option>
          <option name="winetotes" value="winetotes">Wine Totes</option>
          <option name ="winetotes" value="wineart">Wine House Decor</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form> */}
    <Container>
      <Col>
      <ProductList/>
      </Col>
    </Container>
  </div>
);
}
  
}
