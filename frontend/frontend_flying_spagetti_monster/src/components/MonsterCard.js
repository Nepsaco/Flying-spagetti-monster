import React, { Component } from 'react'

import './../stylesheets/MonsterCard.css'

import MonsterQuote from './MonsterQuote'


class MonsterCard extends Component {

    state={
        isClicked: false
    }

    toggleShowQuote = () => {
        this.setState({ isClicked: !this.state.isClicked})
    }

   
  

    render(){
        return (
            <div className="monster-card" key= {this.props.id} onClick={this.toggleShowQuote}>
                <img src = {this.props.image}/>
                {
                    this.state.isClicked
                    ? <MonsterQuote 
                        quote={this.props.quote}
                        />
                    : null
                }
          
            </div>

        )
        
    }

}

export default MonsterCard