import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import {MDBIcon, MDBContainer, MDBBtn} from 'mdbreact';
import {Link} from 'react-router-dom'
import Card from "react-bootstrap/Card";

class LoginPage extends Component {
    constructor() {
        super()
        this.state = {
            userName: '',
            password: '',
            redirectTo: null,
            isFlipped: false,
            visible: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        setInterval(() => {
            this.setState({
                isFlipped: !this.state.isFlipped
            });
        }, 3000);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (e) => {
        const form = {
            // id: id,
            userName: this.state.userName,
            password: this.state.password
        }
        console.log("form", form);
        // NotificationManager.info("Form submitted successfully");
        // console.log('form', form)
        // axios.post('http://localhost:8080/dealer', form)
        //     .then(res => {
        //         console.log(res);
        //         console.log(res.data);
        //         if (res) {
        //             NotificationManager.success("Email send successfully");
        //             setTimeout(() => window.location.reload(), 2000);
        //         } else {
        //             NotificationManager.console.error("Email not send");
        //         }
        //         axios.get('')
        //     })
    }

    handleSubmit(event) {
        event.preventDefault()
        setTimeout(() => window.location.reload(), 2000);

        axios
            .post('/dealer/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                // alert('Login successfully ')

                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: './customerinfo'
                    })
                }
            }).catch(error => {
            NotificationManager.warning('Login error');
        })
        const {username, password} = this.state;

        localStorage.setItem('username', password ? username : '');
    };

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{pathname: this.state.redirectTo}}/>
        } else {
            return (
                <MDBContainer>
                    <form onSubmit={this.onSubmit}>
                        <Card>
                            <div className="container">
                                <div className="style">
                                    <div className="Card">
                                        <h3>Instagram</h3>
                                        <div className="form-group">
                                            <input type="text" id="userName" name="userName" required
                                                   value={this.state.userName} onChange={e => this.handleChange(e)}
                                                   className="form-control"
                                                   placeholder="Phone number, Username or Email"/>
                                        </div>

                                        <div className="form-group">
                                            <input type="password" id="password" name="password" required
                                                   value={this.state.password} onChange={e => this.handleChange(e)}
                                                   className="form-control" placeholder="Password"/>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-dark btn-lg btn-block">Log In
                                            </button>
                                        </div>
                                        <div className="form-group">
                                            <MDBBtn social="fb" size="sm">
                                                <MDBIcon fab icon="facebook-f" className="pr-1"/>Log in with Facebook
                                            </MDBBtn>
                                        </div>
                                        <div className="form-group">
                                            <p>
                                                <Link to="/forgotPassword">Forgot Password?</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <div className="container">
                                <div className="style">
                                    <div className="Card">
                                        <div className="form-group">
                                            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </form>
                </MDBContainer>
            )
        }
    }
}

export default LoginPage
