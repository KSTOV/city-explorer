import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import "./App.css"
import WeatherDay from './WeatherDay.js';

export default class Weather extends Component {
    
    render() {
        return (
            <Table variant="dark" id="weatherTable">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>Weather</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>Date</th>
                        <th>Low Temp</th>
                        <th>High Temp</th>
                        <th>Min Temp</th>
                        <th>Max Temp</th>
                        <th>Clouds</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.forecast.length > 0 && this.props.forecast.map(cast => <WeatherDay day={cast}/>)} 
                </tbody>
            </Table>
        )
    }
}
