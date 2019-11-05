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

    displayMonsters = () => this.state.monsters.map(monster => {
        return(
                <MonsterCard
                    image = {monster.img} 
                    quote = {monster.quote}
                    id = {monster.id}
                />
            )
    })
 

    render(){
        return(
            <div className="monster-container">
                <h1>The Lord of Illumination</h1>
                {this.displayMonsters()}
            </div>
        )
    }
}

export default MonsterContainer