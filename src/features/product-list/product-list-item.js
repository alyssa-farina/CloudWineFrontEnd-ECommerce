import React from 'react';
import { connect } from 'react-redux';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

class ProductListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Modal
          className="pop-up"
          isOpen={this.state.modal}
          toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            {this.props.product.name} - ${this.props.product.price}
            <br />
          </ModalHeader>
          <ModalBody>
            <img
              height={300}
              title={this.props.product.name}
              src={this.props.product.img}
              alt={this.props.product.name}
              className="inline"
            />
          
            
            

              <br/>
              <hr/>
             
           <br/>
            <p className="inline left-margin">
              {this.props.product.description}
            </p>
          </ModalBody>
          <ModalFooter>
          <h6 className="majorkey"> Major 🔑 alert! 50% off </h6>
          <p className="saleprice"> Sale price: $  {this.props.product.price / 2.0}</p> 
            {this.props.currentUser.username ? (
              <Button
                className="white-button"
                onClick={() => this.props.addToCart(this.props.product)}>
                Add to Cart (
                {(this.props.cartItem && this.props.cartItem.quantity) || 0})
              </Button>
            ) : null}
          </ModalFooter>
        </Modal>

        <div className="product-list-item">
          <Card>
            <CardImg
              height={280}
              title={this.props.product.name}
              src={this.props.product.img}
              alt={this.props.product.name}
              onClick={this.toggle}
            />
            <CardBody>
              <CardTitle onClick={this.toggle}>
                <h3>{this.props.product.name}</h3>
              </CardTitle>
              <CardText>
                <Button
                  className="detailsbtn"
                  size="sm"
                  onClick={this.toggle}>
                  View Details
                </Button>
              </CardText>
              <CardSubtitle onClick={this.toggle}>
                ${this.props.product.price}
              </CardSubtitle>

              {this.props.currentUser.username ? (
                <div>
                  <br />
                  <Button
                    block
                    className="cartbtn"
                    onClick={() => this.props.addToCart(this.props.product)}>
                    Add to Cart (
                    {(this.props.cartItem && this.props.cartItem.quantity) || 0}
                    )
                  </Button>
                  
                  <br />
                  
                </div>
              ) : null}
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    currentUser: state.loggedin.currentUser
  };
}

export default connect(mapStatetoProps)(ProductListItem);
