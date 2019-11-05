import React from 'react'

const GospelSearch = (props) => {

    console.log(props.searchTerm)
    return(
        <section className="search">
            <form>
                <input 
                    type="text"
                    placeholder="Search the gospel"
                    value = {props.searchTerm}
                    onChange = {props.updateSearchTerm}
                />
            </form>
        </section>
    )
}

export default GospelSearch