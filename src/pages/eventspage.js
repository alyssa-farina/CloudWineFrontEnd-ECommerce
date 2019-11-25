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
            title: 'Wine 101 ',
            description: 'The Wine 101 class promises, at a minimum, you will taste a dozen unique wines, sample artisanal cheeses from Murrays Cheese, and leave with a keen sense of what makes wines different along with a better understanding of what you like. While that may seem sufficient for two hours, we aim for more. In this, one of our most popular offerings, we hope you will develop a newfound admiration for this incredible product of nature while tasting the differences in body, tannin, and sweetness of wines.',
            location: 'NYC wine company: 330 West 11th Street, New York, NY 10011',
            startTime: '2019-11-30T15:00:00-04:00',
            endTime: '2019-11-30T16:30:00-04:00'
        }
        console.log(this.state.events)
        return  (
            <div >
                 <h1 className="wineevents" align="center">Wine Events in NYC This Weekend & Upcoming Week</h1>
                 <br/>
                 <br/>
                 <img className="wineimage" src="http://barnoawinebar.com/wp-content/uploads/2018/09/4943309130_016cd1b310_o.jpeg"/>
                 <h4 className="addtocalendar">
                 <AddToCalendar className="calendar"event={event} />
                 </h4>
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
