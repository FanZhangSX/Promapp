import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import "./Alert.css";

export class AlertMessage extends Component {
    render() {
        return (
            <div>
                <Alert bsStyle={this.props.validationColor} className="alert">
                    {this.props.validationMessage}
                </Alert>
            </div>
            );
    }
}