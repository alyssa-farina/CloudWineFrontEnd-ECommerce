import React, { Component } from 'react'

export default class Wineries extends Component {
    state ={
        wineries: []
    }
    componentDidMount(){
        fetch('https://data.ny.gov/api/views/c2hv-vmqn/rows.json?accessType=DOWNLOAD')
            .then(response => response.json())
           
            .then(output => {
                this.setState({
                    wineries: output
                })
            })
        }
    render() {
        console.log(this.state.wineries)
        return (
            <div>
               
            </div>
        )
    }
}
