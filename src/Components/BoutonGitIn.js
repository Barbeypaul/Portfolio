import React, { Component } from 'react'

export class BoutonGitIn extends Component {
    render() {
        return (
            <div>
                <button type="button" className="btn btn-white btn-floating m-2">
                    <a target="_blank" href="https://github.com/Barbeypaul"><i className="fab fa-github "></i></a>
                </button>
                <button type="button" className="btn btn-white btn-floating m-2">
                    <a target="_blank" href="https://www.linkedin.com/in/paul-barbey-31b8481aa/"><i className="fab fa-linkedin-in "></i></a>
                </button>
            </div>
        )
    }
}

export default BoutonGitIn

