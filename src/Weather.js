import React, { Component } from 'react';

export default class Weather extends Component {
    
    render() {
        return (
            <div>
                {this.props.forecast && this.props.forecast.map(day => <p id="weather">{day.date}: {day.description}</p>)}
            </div>
        )
    }
}
