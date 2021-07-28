import React, { Component } from 'react'
import Accueil from './Accueil'
import QuiJeSuis from './QuiJeSuis'
import MonParcours from './MonParcours'
import Mesrealisations from './Mesrealisations'
import Footer from './footer';

export class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                    <ul className="navbar-menu">
                        <li className="navbar-item logo">
                            <a href="#" className="navbar-link">
                                <span className="navbar-title">PaulBarbey</span>
                                <i className="fas fa-code navbar-icon"></i>

                            </a>
                        </li>
                        <li className="navbar-item">
                            <a href="#1scroll" className="navbar-link">
                                <i className="fas fa-address-card navbar-icon"></i>
                                <span className="navbar-title">Qui je suis</span>
                            </a>
                        </li>
                        <li className="navbar-item">
                            <a href="#2scroll" className="navbar-link">
                                <i className="fas fa-user-graduate navbar-icon"></i>
                                <span className="navbar-title">Mon parcours</span>
                            </a>
                        </li>
                        <li className="navbar-item">
                            <a href="#3scroll" className="navbar-link">
                                <i className="fas fa-hammer  navbar-icon"></i>
                                <span className="navbar-title">Mes réalisations</span>
                            </a>
                        </li>
                        <li className="navbar-item">
                            <a href="#4scroll" className="navbar-link">
                                <i className="far fa-comments  navbar-icon"></i>
                                <span className="navbar-title">Contact</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div>
                    <Accueil></Accueil>
                    <div className="bg-white position-absolute top-100 container-fluid ">
                        <div id="1scroll">
                            <QuiJeSuis></QuiJeSuis>
                        </div >
                        <div id="2scroll">
                            <MonParcours></MonParcours>
                        </div>
                        <div id="3scroll">
                            <Mesrealisations></Mesrealisations>
                        </div>

                        <div id="4scroll">
                            <Footer></Footer>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav
