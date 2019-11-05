import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

import './../stylesheets/App.css'

class Nav extends Component {
    render(){
        return(
            <Router>
                <nav className="nav">
                    <Link />
                </nav>
            </Router>
            
        )
    }
}

export default Nav