import React, { Component } from 'react'

export class Load extends Component {
    render() {
        return (
            <div>
                <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
}

export default Load
