import React, {Component} from 'react'
import {Route} from 'react-router-dom'
// components
import LoginPage from './components/login'
import SignUp from './components/signup/signup'

import './App.css'
import ForgotPassword from "./components/forgotpassword";

class App extends Component {
    constructor() {
        super()
        this.updateUser = this.updateUser.bind(this)
    }

    updateUser(userObject) {
        this.setState(userObject)
    }

    render() {
        return (
            <div className="App">
                <Route
                    path="/login"
                    render={() =>
                        <LoginPage
                            updateUser={this.updateUser}
                        />}
                />
                <Route
                    path="/signup"
                    render={() =>
                        <SignUp
                            updateUser={this.updateUser}
                        />}
                />
                <Route
                    path="/forgotPassword"
                    render={() =>
                        <ForgotPassword
                            updateUser={this.updateUser}
                        />}
                />
            </div>
        );
    }
}

export default App;
