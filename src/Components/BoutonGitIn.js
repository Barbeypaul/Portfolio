import React, { Component } from 'react'

export class BoutonGitIn extends Component {
    render() {
        return (
            <div>
                <button type="button" className="btn btn-white btn-floating m-2">
                    <i class="fab fa-github "></i>
                </button>
                <button type="button" className="btn btn-white btn-floating m-2">
                    <i class="fab fa-linkedin-in "></i>
                </button>
            </div>
        )
    }
}

export default BoutonGitIn

