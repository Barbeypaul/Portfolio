import React, { Component } from 'react'
import Accueil from './Accueil'
import QuiJeSuis from './QuiJeSuis'
import MonParcours from './MonParcours'
import Mesrealisations from './Mesrealisations'
export class Nav extends Component {
    render() {
        return (
            <div>
                <nav class="navbar">
                    <ul class="navbar-menu">
                        <li class="navbar-item logo">
                            <a href="#" class="navbar-link">
                                <span class="navbar-title">PaulBarbey</span>
                                <i class="fas fa-rocket navbar-icon"></i>

                            </a>
                        </li>
                        <li class="navbar-item">
                            <a href="#1scroll" class="navbar-link">
                                <i class="fas fa-address-card navbar-icon"></i>
                                <span class="navbar-title">Qui je suis</span>
                            </a>
                        </li>
                        <li class="navbar-item">
                            <a href="#2scroll" class="navbar-link">
                                <i class="fas fa-user-graduate navbar-icon"></i>
                                <span class="navbar-title">Mon parcours</span>
                            </a>
                        </li>
                        <li class="navbar-item">
                            <a href="#3scroll" class="navbar-link">
                                <i class="fas fa-hammer  navbar-icon"></i>
                                <span class="navbar-title">Mes réalisations</span>
                            </a>
                        </li>
                        <li class="navbar-item">
                            <a href="#1scroll" class="navbar-link">
                                <i class="far fa-comments  navbar-icon"></i>
                                <span class="navbar-title">Contact</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div>
                    <Accueil></Accueil>
                    <div className="bg-white position-absolute top-100 container-fluid">
                        <div id="1scroll">
                            <QuiJeSuis></QuiJeSuis>
                        </div >
                        <div id="2scroll">
                            <MonParcours></MonParcours>
                        </div>
                        <div id="3scroll">
                            <Mesrealisations></Mesrealisations>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default Nav
