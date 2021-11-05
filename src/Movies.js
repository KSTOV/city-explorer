import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import "./App.css"
import Movie from './Movie.js';

export default class Weather extends Component {
    
    render() {
        return (
            <Table variant="dark" id="movieTable">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>Movies</th>
                    </tr>
                    <tr>
                        <th>Poster</th>
                        <th>Title</th>
                        <th>Release Date</th>
                        <th>Popularity</th>
                        <th>Overview</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.movies.length > 0 && this.props.movies.map(movie => <Movie  film={movie}/>)}
                </tbody>
            </Table>
        )
    }
}