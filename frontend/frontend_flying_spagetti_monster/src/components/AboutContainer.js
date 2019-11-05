import React, { Component } from 'react'

import './../stylesheets/AboutContainer.css'

import GospelSearch from './GospelSearch'
import CommandmentContainer from './CommandmentContainer'

class AboutContainer extends Component {
    state = {
        searchTerm: "",
        commandments:[
            {
                commandment: "I'd Really Rather You Didn’t Act Like A Sanctimonious Holier-Than-Thou Ass When Describing My Noodly Goodness. If Some People Don't Believe In Me, That's Okay. Really, I'm Not That Vain. Besides, This Isn't About Them So Don't Change The Subject."
            },
            {
                commandment: "I'd Really Rather You Didn't Use My Existence As A Means To Oppress, Subjugate, Punish, Eviscerate, And/Or, You Know, Be Mean To Others. I Don't Require Sacrifices, And Purity Is For Drinking Water, Not People."
            },
            {
                commandment: "I'd Really Rather You Didn't Judge People For The Way They Look, Or How They Dress, Or The Way They Talk, Or, Well, Just Play Nice, Okay? Oh, And Get This In Your Thick Heads: Woman=Person, Man=Person. Samey-Samey. One is Not Better Than The Other, Unless We're Talking About Fashion And I'm Sorry, But I Gave That To Women And Some Guys Who Know The Difference Between Teal And Fuchsia."
            },
            {
                commandment: "I'd Really Rather You Didn't Indulge In Conduct That Offends Yourself, Or Your Willing, Consenting Partner Of Legal Age AND Mental Maturity. As For Anyone Who Might Object, I Think The Expression Is Go F*** Yourself, Unless They Find That Offensive In Which Case They Can Turn Off The TV For Once And Go For A Walk For A Change."
            },
            {
                commandment: "I'd Really Rather You Didn't Challenge The Bigoted, Misogynist, Hateful Ideas Of Others On An Empty Stomach. Eat, Then Go After The B*******."
            },
            {
                commandment: "I'd Really Rather You Didn't Build Multimillion-Dollar Churches/Temples/Mosques/Shrines To My Noodly Goodness When The Money Could Be Better Spent -Take Your Pick- Ending Poverty,Curing Diseases, Living In Peace, Loving With Passion, And Lowering The Cost Of Cable. I Might Be A Complex-Carbohydrate Omniscient Being, But I Enjoy The Simple Things In Life. I Ought To Know. I AM The Creator. "
            },
            {
                commandment:  "I'd Really Rather You Didn't Go Around Telling People I Talk To You. You're Not That Interesting. Get Over Yourself. And I Told You To Love Your Fellow Man, Can't You Take A Hint?"
            },
            {
                commandment: "I'd Really Rather You Didn't Do Unto Others As You Would Have Them Do Unto You If You Are Into, Um, Stuff That Uses Alot Of Leather/Lubrication/Las Vegas. If The Other Person Is Into It However (Pursuant To #4), Then Have At It, Take Pictures, And For The Love Of Mike, Wear A CONDOM! Honestly, It's A Piece Of Rubber, If I Didn't Want It To Feel Good When You Did IT I Would Have Added Spikes, Or Something. RAmen."
            }
        ]
    }

    filteredCommandments = () => this.state.commandments
        .filter(commandment => {
            return(commandment.commandment
                .toLowerCase()
                .includes(this.state.searchTerm.toLowerCase())
                )
    })
    
    
        updateSearchTerm = (event) => {
            this.setState({
                searchTerm: event.target.value
            })
        }



    render(){
        return(
            <div>
                <h1>About the True Lord of Illumination</h1>
                <GospelSearch searchTerm={this.state.searchTerm} updateSearchTerm = {this.updateSearchTerm} />
                <CommandmentContainer commandments={this.filteredCommandments()}/>

            </div>
        )
    }
}

export default AboutContainer