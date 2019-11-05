import React, { Component } from 'react'

import './../stylesheets/SpaghettiContainer.css'


class SpaghettiContainer extends Component {

    state ={
        monsters: []
    }

    componentDidMount() {
        this.getAll()
    }

    getAll = () => {
        fetch('http://localhost:3000/monsters')
            .then(response => response.json())
            .then(monsters => this.setState({ monsters }))       
    }

    render(){
        return(
            <div>
                <h2>in Container</h2>
            </div>
        )
    }
}

export default SpaghettiContainer