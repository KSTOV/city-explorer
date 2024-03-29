import React, { Component } from 'react'
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Error from './Error.js';
import Weather from './Weather.js';
import Movies from './Movies.js';


export default class CityData extends Component {
    constructor(props) {
        super(props)
        this.state = {
          cityValue: '',
          cityName: '',
          map:'',
          error: false,
          setError: '',
          location: {},
          forecast: [],
          movies: []
        }
    }
    
    handleClick = async () => {
        const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.cityValue}&format=json`;

        try {
            let response = await axios.get(url);
            this.setState({location: response.data[0]});

        } catch (event) {
            this.setState({error: true});
            this.setState({setError: event.response.status});
        }
    }
    
    handleChange = (event) => {
        event.preventDefault();
        this.setState({ cityValue: event.target.value })
    }

    hideModal = () => {
        this.setState({error: false});
    }

    getForecast = async () => {
        const url = `${process.env.REACT_APP_SERVER_URL}/weather?lat=${this.state.location.lat}&lon=${this.state.location.lon}`;
        try {
            let response = await axios.get(url);
            console.log(response);
            this.setState({forecast: response.data});
        } catch (event) {
            this.setState({error: true});
            this.setState({setError: event.response.status});
        }
    }

    getMovies = async () => {
        const url = `${process.env.REACT_APP_SERVER_URL}/movies?query=${this.state.cityValue}`;
        try {
            let response = await axios.get(url);
            console.log(response);
            this.setState({movies: response.data})
        } catch (event) {
            this.setState({error: true});
            this.setState({setError: event.response.status});
        }
    }

    onClick = async () => {
        await this.handleClick();
        await this.getForecast();
        await this.getMovies();
    }
    
    render() {
        let lat = this.state.location && this.state.location.lat;
        let lon = this.state.location && this.state.location.lon;

        return (
            <div id='cityData'>
                <Form>
                    <InputGroup id='formInput' style={{width: '250px'}}>
                        <InputGroup.Text>&#128506;&#65039;</InputGroup.Text>
                        <Form.Control onChange={this.handleChange} placeholder='Enter City Name'/>
                        <InputGroup.Text>&#128506;&#65039;</InputGroup.Text>
                    </InputGroup>

                    <Button onClick={this.onClick}>Explore</Button>

                    <Form.Group>
                        <Form.Label><h3>Name:</h3></Form.Label>
                        <Form.Text>{this.state.location && <h2>{this.state.location.display_name}</h2>}</Form.Text>
                    </Form.Group>

                    <Form.Group id="lat">
                        <Form.Label><h3>Latitude:</h3></Form.Label>
                        <Form.Text><h2>{lat}</h2></Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label><h3>Longitude:</h3></Form.Label>
                        <Form.Text><h2>{lon}</h2></Form.Text>
                    </Form.Group>
                </Form>
                <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${lat},${lon}&size=600x700&zoom=12`} alt={this.state.cityValue} id="map"/>
                <Error setError={this.state.setError} show={this.state.error} hideModal={this.hideModal}/>
                <Weather forecast={this.state.forecast}/>
                <Movies movies={this.state.movies}/>
            </div>
        )
    }
}
