import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class welcomepage extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <a href="/products">Shop Now!</a>
                    <img src="https://image.shutterstock.com/image-photo/50-off-discount-promotion-sale-260nw-1014416671.jpg" />
                    
                </div>
                <div>
                <a href="https://learn.winecoolerdirect.com/cheese-and-wine-pairings/">Click</a>
                    <img src="https://image.shutterstock.com/image-vector/wine-cheese-pairing-vector-illustration-260nw-583704112.jpg" />
                   
                    
                </div>
                <div>
                    <img src="https://scylla.mobee.xyz/f_webp/w_420/q_90/https://www.homestratosphere.com/wp-content/uploads/2018/03/different-types-of-red-wine-glasses-chart.jpg" />
                   
                </div>
            </Carousel>
        );
    }
}
