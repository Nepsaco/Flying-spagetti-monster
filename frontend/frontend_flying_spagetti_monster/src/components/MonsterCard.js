import React from 'react'

const MonsterCard = (props) => {
    console.log("monsterCaard props",props.monsters)

    const monsters = () => props.monsters.map(monster => {
        return(
            <div className="monster-card" key={monster.id}>
                <img src={monster.img}/>
                <p>{monster.quote}</p>
            </div>
        )
    })

    return monsters()
}

export default MonsterCard