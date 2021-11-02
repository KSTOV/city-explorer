import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';

export default class Error extends Component {

    handleClose = () =>{
        this.props.hideModal();
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.handleClose}>
                <Modal.Header closeButton />
                <Modal.Body>Error: {this.props.setError}</Modal.Body>
            </Modal>
        )
    }
}
