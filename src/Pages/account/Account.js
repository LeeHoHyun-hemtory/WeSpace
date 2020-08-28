import React, { Component } from 'react';
import Input from '../../Components/input/Input';
import Button from '../../Components/button/Button';
import { Link } from 'react-router-dom';
import Nav from '../../Components/nav/Nav';
import Footer from '../../Components/footer/Footer';
import { API_LOGIN } from '../../config';
import './Account.scss';

class Account extends Component {
    state = {
        email: '',
        password: ''
    };

    handleOnclick = (e) => {
        const api_login = API_LOGIN;

        e.preventDefault();
        fetch(`${api_login}`, {
            method: 'POST',
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        }).then(response => response.json())
        .then(response => {
            console.log(response);
        });
    }

    handleOnChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <div className="AccountContainer">
                <form className="accountForm">
                    <div className="loginText">LOGIN</div>
                    <div>
                        <span>Please enter your e-mail and password:</span>
                    </div>
                    <Input name="email" handleOnChange={this.handleOnChange} placeHolder="Email" />
                    <Input name="password" handleOnChange={this.handleOnChange} placeHolder="Password" forgotPw={true}/>
                    <Button handleOnclick={this.handleOnclick} text="LOGIN" />
                    <div className="accountBottom">
                        <span>Don't have an account? </span>
                        <Link to="register">
                            <span className="goToRegister">Create one</span>
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default Account;