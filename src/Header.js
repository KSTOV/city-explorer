import React, { Component } from 'react'
import './App.css'


export default class Header extends Component {
    render() {
        return (
            <div id='headerDiv'>
                <h1>City Explorer</h1>
                <img  src='https://cliply.co/wp-content/uploads/2021/02/392102850_EARTH_EMOJI_400px.gif' alt='world gif' id='gif'/>
            </div>
        )
    }
}
