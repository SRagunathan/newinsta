import React from 'react';
import axios from 'axios';
import '../forgotpassword/forgotpassword.css'
import Card from 'react-bootstrap/Card'
import {NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import {MDBBtn, MDBIcon} from "mdbreact";
import {Link} from "react-router-dom";

class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            userName: ' ',
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit = (e) => {
        // this.setState({ id })
        // console.log(b);
        const form = {
            // id: id,
            userName: this.state.userName
        }
        // NotificationManager.info("Form submitted successfully");
        console.log('form', form);
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
                                <strong>Trouble Logging In?</strong>
                                <div className="form-group">
                                    <p>Enter your email, phone, or username and we'll send you a link to get back into
                                        your account.</p>
                                </div>
                                <div className="form-group">
                                    <input type="text" id="userName" name="userName" required
                                           value={this.state.userName} onChange={e => this.handleChange(e)}
                                           className="form-control" placeholder="Email, Phone or User Name"/>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-dark btn-lg btn-block">Send Login Link
                                    </button>
                                </div>
                                <p>
                                    By signing up, you agree to our Terms , Data Policy and Cookies Policy .
                                </p>
                                <p>OR</p>
                                <div className="form-group">
                                    <p>
                                        <Link to="/signup">Create New Account</Link>
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


export default ForgotPassword;