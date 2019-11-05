import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';


import './../stylesheets/Nav.css'


import AppNotFound from './AppNotFound'

class Nav extends Component {
    render(){
        return(
            <Router>
                <nav className="nav">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/">About</Link>
                </nav>
                <Switch>
                    <Route 
                        exact path="/" 
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