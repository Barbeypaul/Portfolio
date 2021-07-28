import React, { Component } from 'react'
import moi from '../Img/moi.jpg'

export class QuiJeSuis extends Component {
    render() {
        return (
            <div>
                <div className="container p-5 mt-5">
                    <h2><i class="fas fa-address-card"></i> Bonjour, je m'appelle Paul. Ravi de vous rencontrer !
                    </h2>
                    <div className="row pt-5 pb-5 ">
                        <div class="card bg-dark shadow-5 rounded ">
                            <div class="row g-0">
                                <div class="col-md-4 d-flex justify-content-center">
                                    <img className="img-moi m-5 " src={moi}></img>
                                </div>
                                <div class=" col-md-8 ">
                                    <div class="card-body">
                                        <p class="card-text text-white">
                                            Développeur web junior, je recherche un emploi suite à ma première expérience, que j'ai effectué en stage chez U GIE IRIS. Lors de cette expérience j'ai pu contribuer au développement d'une application web, de sa conception à sa finalisation.

                                            Après avoir obtenu un BTS Électrotechnique, j'ai choisi de me reconvertir dans le développement web auquel je me suis initié en autodidacte. J'ai depuis validé mon diplôme de Développeur Back et Front-end via une formation Digital Campus.

                                            Passionné par JavaScript depuis mon stage chez U GIE IRIS, je me forme actuellement sur react et node js, avec comme objectif de professionnaliser mon code, et de devenir développeur Full Stack.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mt-3">
                            <h3 className="text-center text-warning m-3">Technologies</h3>
                            <div className="text-center">
                                <p>Html5 / Css3</p>
                                <p>Sass</p>
                                <p>JavaScript</p>
                                <p>React Js / Redux</p>
                                <p>Node Js</p>
                                <p>GoogleApi / Google Script</p>
                                <p>Symfony</p>
                            </div>

                        </div>
                        <div className="col-md-6 mt-3">
                            <h3 className="text-warning text-center m-3">Outils</h3>
                            <div className="text-center">
                                <p>GitHub</p>
                                <p>Git bash</p>
                                <p>Google FireBase</p>
                                <p>Stack Overflow</p>
                                <p>VsCode</p>
                                <p>Udemy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuiJeSuis
