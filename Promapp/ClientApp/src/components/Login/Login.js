import React, { Component } from 'react';
import { Panel, Form, FormGroup, FormControl, Button, CheckBox, Image } from 'react-bootstrap';
import { AlertMessage } from '../Alert';
import './Login.css';
import { LoginForm } from "./LoginForm";


export class Login extends Component {
    

    render() {

        return (
            <div className="App">
                <div className="App-header">
                    <Image src="logo.png" className="App-logo" alt="logo" fulid />
                    
                    <h2>Welcome to Promapp</h2>
                    <br />
                </div>
                <LoginForm />
                <div class="validation-summary-valid"> </div>
            </div>

            )
    }
}


export default Login;