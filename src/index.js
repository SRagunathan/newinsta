import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
//style
import 'spectre.css/dist/spectre.min.css';
import 'spectre.css/dist/spectre-icons.css';
import './index.css';
const routing = (
    <Router>
        <div>
            <Route exact path="/" component={() => (<Redirect to="/login" />)} />
            <App/>
        </div>
    </Router>
)
ReactDOM.render(
    routing,
    document.getElementById('root')
)