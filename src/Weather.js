import React, { Component } from 'react';

export default class Weather extends Component {
    
    render() {
        return (
            <div>
                {this.props.forecast.length > 0 && this.props.forecast.map(day => <li key={day.date}>Date:{day} Description:{day.description}</li>)}
            </div>
        )
    }
}
