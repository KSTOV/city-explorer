import React, { Component } from 'react'

export default class WeatherDay extends Component {
    render() {
        return (
        <tr key={this.props.day.date}>
            <td>{this.props.day.date}</td>
            <td>{this.props.day.lowTemp}</td>
            <td>{this.props.day.highTemp}</td> 
            <td>{this.props.day.minTemp}</td>  
            <td>{this.props.day.maxTemp}</td> 
            <td>{this.props.day.clouds}</td> 
            <td>{this.props.day.description}</td>  
        </tr>
        )
    }
}
