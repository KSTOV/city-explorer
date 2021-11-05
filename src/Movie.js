import React, { Component } from 'react'

export default class Movie extends Component {
    render() {
        return (
            <tr key={this.props.film.title}>
                <td><img src={this.props.film.image_url} alt={this.props.film.title} id="moviePoster"/></td>
                <td>{this.props.film.title}</td>
                <td>{this.props.film.release_date}</td>    
                <td>{this.props.film.popularity}</td>
                <td>{this.props.film.overview}</td> 
            </tr>
        )
    }
}
