import React, { Component } from 'react'
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

export default class CityData extends Component {
    constructor(props) {
        super(props)
        this.state = {
          cityValue: '',
        }
    }
    
    handleClick = async () => {
        const usUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.cityValue}&format=json`;

        let response = await axios.get(usUrl)
        console.log(response.data[0]);
        this.setState({location: response.data[0]})
        
    }
    
    handleChange = (event) => {
    this.setState({ cityValue: event.target.value })
    }

    render() {
        return (
            <Form>
                <InputGroup style={{width: '250px'}}>
                    <InputGroup.Text>&#128506;&#65039;</InputGroup.Text>
                    <Form.Control onChange={this.handleChange}/>
                    <InputGroup.Text>&#128506;&#65039;</InputGroup.Text>
                </InputGroup>

                <Button onClick={this.handleClick}>Explore</Button>

                <Form.Group>
                    <Form.Label><h3>City Name:</h3></Form.Label>
                    <Form.Text>{this.state.location && <h1>{this.state.location.display_name}</h1>}</Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label><h3>Latitude:</h3></Form.Label>
                    <Form.Text>{this.state.location && <h1>{this.state.location.lat}</h1>}</Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label><h3>Longitude:</h3></Form.Label>
                    <Form.Text>{this.state.location && <h1>{this.state.location.lon}</h1>}</Form.Text>
                </Form.Group>
            </Form>
        )
    }
}
