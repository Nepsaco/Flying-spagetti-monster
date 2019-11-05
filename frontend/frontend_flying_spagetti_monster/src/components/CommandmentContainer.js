import React from 'react'

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