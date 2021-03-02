import React from 'react';
import axios from 'axios';
import '../signup/signup.css'
import Card from 'react-bootstrap/Card'
import {NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import {MDBBtn, MDBIcon} from "mdbreact";
import {Link} from "react-router-dom";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            email: '',
            fullName: '',
            userName: '',
            password: '',
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) => {
        const form = {
            // id: id,
            email: this.state.email,
            fullName: this.state.fullName,
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

    componentDidMount() {
        // axios.get('http://localhost:8080/autoinc')
        //     .then(res => {
        //         let docs;
        //         if ( res.data.docs.length > 0){
        //             docs = res.data.docs[0].id;
        //         } else {
        //             docs = 'FORQQD0';
        //
        //         }
        //         console.log("ID", docs)
        //         this.setState({ docs});
        //
        //
        //     })

    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <Card>
                    <div className="container">
                        <div className="style">
                            <div className="Card">
                                <strong>Instagram</strong>
                                <p>
                                    Sign up to see photos and videos from your friends.
                                </p>
                                <div className="form-group">
                                    <MDBBtn social="fb" size="sm">
                                        <MDBIcon fab icon="facebook-f" className="pr-1"/>Log in with Facebook
                                    </MDBBtn>
                                </div>
                                <p>
                                    OR
                                </p>
                                <div className="form-group">
                                    <input type="text" id="email" name="email" required value={this.state.email}
                                           onChange={e => this.handleChange(e)} className="form-control"
                                           placeholder="Mobile Number or Email"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" id="fullName" name="fullName" required
                                           value={this.state.fullName} onChange={e => this.handleChange(e)}
                                           className="form-control" placeholder="Full Name"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" id="userName" name="userName" required
                                           value={this.state.userName} onChange={e => this.handleChange(e)}
                                           className="form-control" placeholder="User Name"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" id="password" name="password" required
                                           value={this.state.password} onChange={e => this.handleChange(e)}
                                           className="form-control" placeholder="Password"/>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-dark btn-lg btn-block">Sign Up</button>
                                </div>
                                <p>
                                    By signing up, you agree to our Terms , Data Policy and Cookies Policy .
                                </p>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="container">
                        <div className="style">
                            <div className="Card">
                                <div className="form-group">
                                    <p>
                                        Have an account? <Link to="/login">Login</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </form>
        );
    }
}

export default SignUp;