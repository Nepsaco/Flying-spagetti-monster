import React, { Component } from 'react'

import './../stylesheets/MonsterQuote.css'

const MonsterQuote = (props) => {
    return(
        <div className="show-quote">
            <p>{props.quote}</p>
        </div>
    )
}

export default MonsterQuote