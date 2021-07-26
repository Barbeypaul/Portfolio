import React, { Component } from 'react'
import BoutonGitIn from './BoutonGitIn'
import Mouse from './Mouse'
export class Accueil extends Component {
    render() {
        return (
            <div>
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
                <div id='title'>
                    <span className="line-1 anim-typewriter">
                        Paul Barbey
                    </span>
                    <br></br>
                    <span>
                        Développeur Junior Javascript
                    </span>
                    <div>
                        <BoutonGitIn></BoutonGitIn>
                        <Mouse></Mouse>
                    </div>

                </div>
            </div>
        )
    }
}

export default Accueil
