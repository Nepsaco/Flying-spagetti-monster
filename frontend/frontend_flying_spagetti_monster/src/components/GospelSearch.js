import React from 'react'

import './../stylesheets/GospelSearch.css'


const GospelSearch = (props) => {

    console.log(props.searchTerm)
    return(
        <section className="search">
            <form>
                <input 
                    type="text"
                    placeholder="Search the commandments"
                    value = {props.searchTerm}
                    onChange = {props.updateSearchTerm}
                />
            </form>
        </section>
    )
}

export default GospelSearch