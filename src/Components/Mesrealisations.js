import React, { Component } from 'react'
import gie from '../Img/gie.png'
import Surf from '../Img/Surf.JPG'

export class Mesrealisations extends Component {
    render() {
        return (
            <div>
                <div className="container p-5">
                    <h2><i class="fas fa-address-card"></i> Mes realisations</h2>
                    <p className="text-white">Voici quelques projets sur lesquels j'ai travaillé récemment.</p>
                    <div className="container">
                        <div className="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
                            <div className="col">
                                <div className="card h-100 bg-white">
                                    <img
                                        src={gie}
                                        className="card-img-top"
                                        alt="Smart Meeting Image"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Smart Meeting</h5>
                                        <p className="card-text">
                                            Réalisation d'une application web pour réserver des services au sein du groupe U. Développement d'une interface utilisateur et administrateur. Utilisation de Google Script pour connecter Google Calendar, Gmail, Sheets.
                                        </p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">
                                            <span className="badge bg-dark m-1">Google Script</span><span className="badge bg-dark m-1">FireBase</span><span className="badge bg-dark m-1">Google Api</span><span className="badge bg-dark m-1">JavaScript</span>
                                        </small>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 bg-white">
                                    <img
                                        src={Surf}
                                        className="card-img-top"
                                        alt="SearchTheTripImage"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">SearchTheTrip</h5>
                                        <p className="card-text">
                                            Création personnelle d'une application web, rassemblant différents films et séries sur le thème du surf. Développement d'une interface utilisateur et administrateur. Utilisation de react Js pour la partie front-end, et de Fire Base pour gérer la partie back-end.<br /> Actuellement en construction...
                                        </p>
                                        <a href="https://searchthetrip.netlify.app/" rel="noreferrer" target="_blank"><i className="fas fa-eye text-dark"></i></a>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted"><span className="badge bg-dark m-1">React Js</span><span className="badge bg-dark m-1">FireBase</span></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Mesrealisations
