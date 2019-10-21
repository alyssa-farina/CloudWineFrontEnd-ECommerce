import React, { Component } from 'react'
import AddToCalendar from 'react-add-to-calendar';

export default class eventspage extends Component {

    state = {
        events: [],
       
}

    componentDidMount(){
        fetch('http://localhost:3000/events')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    events: data
                })
            })
    }

    render() {
        let event = {
            title: 'Champagne Tasting with Blue',
            description: 'Friday night marks the beginning of the weekend. Celebrate the week by coming to taste a curated list of Champagne with our friend Blue!',
            location: '40 Hudson Street New York, NY 10013',
            startTime: '2019-10-25T17:00:00-04:00',
            endTime: '2019-10-25T20:00:00-04:00'
        }
        console.log(this.state.events)
        return  (
            <div >
                 <h1 align="center">Wine Events in NYC This Weekend & Upcoming Week</h1>
                 <br/>
                 <br/>
                 <img className="wineimage" src="http://barnoawinebar.com/wp-content/uploads/2018/09/4943309130_016cd1b310_o.jpeg"/>
                 
                 <AddToCalendar className="calendar"event={event} />
                {
                    this.state.events.map(event => {
                        console.log("name:",event.name)
                        return(
                           
                            <div className="carddiv">
                               <h4><b>{event.name}</b></h4>
                               <h6> Location: {event.location}</h6>
                               <h6> Time: {event.time}</h6>
                               <h6> Date: {event.date}</h6>
                               <h6> Price: {event.price}</h6>
                            </div>
                            
                        )


                    })
                }
                
            </div>
        )
    }
}
