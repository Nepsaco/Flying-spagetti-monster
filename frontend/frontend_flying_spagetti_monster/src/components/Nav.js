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

class Nav extends Component {
    render(){
        return(
            <Router>
                <nav className="nav">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/">About</Link>
                </nav>
                <h1>The Lord of Illumination</h1>
                <Switch>
                    <Route 
                        exact path="/" 
                        component={SpaghettiContainer}
                        // render={(props)=> <GodContainer {...props} 
                        // cards={this.state.cards}/>}
                    />
                    <Route
                        path ="/about"
                    />
                    <Route component={AppNotFound} />
                </Switch>
            </Router>
            
        )
    }
}

export default Nav