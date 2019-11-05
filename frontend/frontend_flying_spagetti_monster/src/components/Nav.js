import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';


import './../stylesheets/Nav.css'

import AppNotFound from './AppNotFound'
import SpaghettiContainer from './SpaghettiContainer';
import AboutContainer from './AboutContainer';

class Nav extends Component {

    render(){
        return(
            <Router>
                <nav className="nav">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/about">About</Link>
                </nav>
                <h1>The Lord of Illumination</h1>
                <Switch>
                    <Route 
                        exact path="/" 
                        component={SpaghettiContainer}
                    />
                    <Route
                        path ="/about"
                        component={AboutContainer}
                    />
                    <Route component={AppNotFound} />
                </Switch>
            </Router>
            
        )
    }
}

export default Nav