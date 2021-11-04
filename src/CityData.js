import React, { Component } from 'react'
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Error from './Error.js';
import Weather from './Weather.js';

export default class CityData extends Component {
    constructor(props) {
        super(props)
        this.state = {
          cityValue: '',
          cityName: '',
          error: false,
          setError: '',
          location: {},
          forecast: []
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
        const url = `${process.env.REACT_APP_SERVER_URL}/weather?city=${this.state.location.display_name}&lat=${this.state.location.lat}&lon=${this.state.location.lon}`;
        try {
            let response = await axios.get(url);
            this.setState({forecast: response.data});
        } catch (event) {
            this.setState({error: true});
            this.setState({setError: event.response.status});
        }
    }


    onClick = () => {
        this.handleClick();
        this.getForecast();
    }

    render() {
        let lat = this.state.location && this.state.location.lat;
        let lon = this.state.location && this.state.location.lon;

        return (
            <div>
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
                    <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${lat},${lon}&size=400x400&zoom=12`} alt={this.state.cityValue} />
                </Form>
                <Error setError={this.state.setError} show={this.state.error} hideModal={this.hideModal}/>
                <Weather forecast={this.state.forecast}/>
            </div>
        )
    }
}
