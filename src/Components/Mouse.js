import React, { Component } from 'react'

export class Mouse extends Component {
    render() {
        return (
            <div>
                <div class="mouse_scroll">

                    <div class="mouse">
                        <div class="wheel"></div>
                    </div>
                    <div>
                        <span class="m_scroll_arrows unu"></span>
                        <span class="m_scroll_arrows doi"></span>
                        <span class="m_scroll_arrows trei"></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Mouse
