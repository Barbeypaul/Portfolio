import React, { Component } from 'react'

export class Load extends Component {
    render() {
        return (
            <div>
                <div class="spinner-border text-light" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
}

export default Load
