import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';


import './../stylesheets/Nav.css'

import AppNotFound from './AppNotFound'
import MonsterContainer from './MonsterContainer';
import AboutContainer from './AboutContainer';

class Nav extends Component {

    render(){
        return(
            <Router>
                <nav className="nav">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/about">About</Link>
                </nav>
                <Switch>
                    <Route 
                        exact path="/" 
                        component={MonsterContainer}
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