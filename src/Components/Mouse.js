import React, { Component } from 'react'

export class Mouse extends Component {
    render() {
        return (
            <div>
                <div className="mouse_scroll">
                    <a href="#1scroll">
                        <div class="mouse">
                            <div class="wheel"></div>
                        </div>
                    </a>
                    <div>
                        <span className="m_scroll_arrows unu"></span>
                        <span className="m_scroll_arrows doi"></span>
                        <span className="m_scroll_arrows trei"></span>
                    </div>
                </div>

            </div>
        )
    }
}

export default Mouse
