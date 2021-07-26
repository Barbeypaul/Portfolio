import React, { Component } from 'react'

export class BoutonGitIn extends Component {
    render() {
        return (
            <div>
                <button type="button" className="social-button">
                    <i class="fab fa-linkedin-in "></i>
                </button>
                <button type="button" className="social-button">
                    <i class="fab fa-github "></i>
                </button>
            </div>
        )
    }
}

export default BoutonGitIn

