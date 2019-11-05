import React, { Component } from 'react'

import './../stylesheets/MonsterContainer.css'

import MonsterCard from './MonsterCard'


class MonsterContainer extends Component {

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
            <div className="monster-container">
                <MonsterCard monsters={this.state.monsters}/>
            </div>
        )
    }
}

export default MonsterContainer