import React from 'react'

import './../stylesheets/CommandmentContainer.css'


const CommandmentContainer = (props) => {

    const commandments = props.commandments.map(commandment => {
        return(
            <li>
            {commandment.commandment}
            </li>
        )
    })

    return(
        <div>
            <ol>
            {commandments}
            </ol>
        </div>
    )
}

export default CommandmentContainer