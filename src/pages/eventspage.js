import React, { Component } from 'react'
import AddToCalendar from 'react-add-to-calendar';

export default class eventspage extends Component {
    
    render() {
        let event = { 
            title: 'Whine About It',
            description: 'This book club event is held for people who love reading, love wine, and love to whine about the books that they have read! The book we are discussing is The Wine Bible. So if you havent already, pick one up and get to reading',
            location: 'New York, NY',
            startTime: '2019-10-26T20:15:00-04:00',
            endTime: '2019-10-26T21:45:00-04:00'
        };
        return (
            <div>
                <h1 className="events">Events in NYC</h1>
                
                <img className="bookbible" src="https://d17lzgq6gc2tox.cloudfront.net/product/three_d_cover_image/original/9780761180838_3D.png?1486094401"/>
                <br/>
                <br/>
                <h2 className="sip"> Whine About It</h2>
                <br/>
                <p className="joinus">Join us this weekend for a Sip and Whine book club where we will be sipping on some of the best wines while reviewing (or whining about) the book The Wine Bible. 
                    So get your wine glass ready and make sure you bring your book with you. If you don't have a hard copy,
                    you can order one from Cloud Wine for 50% off.
                </p>
              <h5 className="location">Location:</h5>
              <h6>New York, NY</h6>
              <br/>
              <h5 className="location">Time:</h5>
              <h6>Start Time: 8:15 PM</h6>
              <h6>End Time: 9:45 PM</h6>
                
                   
                <p>
                    <h1 className="calendar">
                <AddToCalendar event={event} />
                </h1>
                </p>
                
            </div>
        )
    }
}
