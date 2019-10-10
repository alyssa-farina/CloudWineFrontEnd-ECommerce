import React from 'react';

import fetchApi from '../../modules/fetch-api';

import { Container, Row, Col } from 'reactstrap';

class Order extends React.Component {
  state = {
    order: null
  };

  componentDidMount() {
    fetchApi('get', `'http://localhost:3000/orders'`).then(
      json => {
        this.setState({
          order: json
        });
      }
    );
  }

  renderOrder() {
    const { order } = this.state;
    console.log(order);
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <h3 className="text-center">Hooray, your order is on its way!</h3>
            <h4>
              Order Confirmation Number:{' '}
              {Math.floor(Math.random() * 100000 + 1)}
            </h4>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <img
          
              alt="man on scooter"
              className="scooter-img"
            />
          </Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <h4 className="text-center">
              Order Confirmation Number:{' '}
              {Math.floor(Math.random() * 100000 + 1)}
            </h4>
          </Col>
        </Row>
      </Container>
    );
  }
  render() {
    const { order } = this.state;
    return <div>{order ? this.renderOrder() : 'Loading...'}</div>;
  }
}

export default Order;
