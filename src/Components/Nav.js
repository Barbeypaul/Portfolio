import React, { Component } from 'react'
import Accueil from './Accueil'

export class Nav extends Component {
    render() {
        return (
            <div>
                <nav class="navbar">
                    <ul class="navbar-menu">
                        <li class="navbar-item logo">
                            <a href="#" class="navbar-link">
                                <span class="navbar-title">PaulBarbey</span>
                                <i class="fas fa-chevron-right navbar-icon"></i>
                            </a>
                        </li>
                        <li class="navbar-item">
                            <a href="#" class="navbar-link">
                                <i class="fas fa-home navbar-icon"></i>
                                <span class="navbar-title">Accueil</span>
                            </a>
                        </li>
                        <li class="navbar-item">
                            <a href="#" class="navbar-link">
                                <i class="fas fa-address-card navbar-icon"></i>
                                <span class="navbar-title">Qui je suis</span>
                            </a>
                        </li>
                        <li class="navbar-item">
                            <a href="#" class="navbar-link">
                                <i class="fas fa-user-graduate navbar-icon"></i>
                                <span class="navbar-title">Notifications</span>
                            </a>
                        </li>
                        <li class="navbar-item">
                            <a href="#" class="navbar-link">
                                <i class="fas fa-hammer  navbar-icon"></i>
                                <span class="navbar-title">Mon parcours</span>
                            </a>
                        </li>
                        <li class="navbar-item">
                            <a href="#" class="navbar-link">
                                <i class="far fa-comments  navbar-icon"></i>
                                <span class="navbar-title">Contact</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <main>
                    <Accueil></Accueil>
                </main>
            </div>
        )
    }
}

export default Nav
