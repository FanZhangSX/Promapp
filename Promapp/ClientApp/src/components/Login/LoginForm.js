import React, { Component } from 'react';
import { Panel, Form, FormGroup, FormControl, Button, CheckBox, Image } from 'react-bootstrap';
import { AlertMessage } from '../Alert';
import './LoginForm.css';

export class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            teams: [],
            rememberMe: false,
            showValidation: false,
            validationColor: '',
            validationMessage: ''
        }

        fetch('api/Login/Teams')
            .then(res => res.json())
            .then(data => {
                let teamsFromApi = data.map(team => { return { value: team, display: team } })

                this.setState({ teams: [{ value: '', display: '' }].concat(teamsFromApi) });
            })
            .catch(error => {
                console.log(error);
            });

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
        console.log(this.state);
    }

    handleRememberMe = () => {
        this.setState({ rememberMe: !this.state.rememberMe });
        console.log(this.state);
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { username, password, team, rememberMe } = this.state;

        let formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        formData.append('team', team);
        formData.append('rememberMe', rememberMe);

        fetch("api/Login/Login", {
            method: 'POST',
            headers: {},
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success == true) {
                    this.setState({ showValidation: true, validationColor: "success", validationMessage: data.message });
                }
                else {
                    this.setState({ showValidation: true, validationColor: "danger", validationMessage: data.message });
                }
            }
            );

    }

    render() {
        const { teams, showValidation, validationMessage, validationColor } = this.state;
        return (
            <form className="demoForm">
                <FormGroup>
                    <FormControl required name="username" placeholder="Username"
                        className="formItem"
                        type="text"
                        onChange={this.handleChange}>
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <FormControl required name="password" placeholder="Password" type="password"
                        className="formItem"
                        onChange={this.handleChange}>
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <FormControl componentClass="select" required name="team" placeholder="Team"
                        className="formItem"
                        onChange={this.handleChange}>
                        {teams.map((team) => <option key={team.value} value={team.value}>{team.display}</option>)}
                    </FormControl>
                </FormGroup>

                <div className="formItem">
                <FormGroup>
                    <a className="formText" href="#forgotten-password">
                        Forgot username or password? Click here.
                    </a>
                    </FormGroup>
                </div>
                <p>
                    {showValidation ? <AlertMessage validationColor={validationColor} validationMessage={validationMessage} /> : null}
                </p>
                <Button bsStyle="primary"
                    className="formItem"
                    block
                    onClick={this.handleSubmit}>Login</Button>

                <br />
                <div className="formItem">
                <label className="checkbox-inline formText">
                    <input className="formText" id="rememberMe" name="rememberMe" type="checkbox"
                        onChange={this.handleRememberMe} />
                    Remember Me</label>
                </div>
                <br />
            </form>

        )
    }
}