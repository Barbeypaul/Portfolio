import React, { Component } from 'react'

export class footer extends Component {
    render() {
        return (
            <div>
                <footer class="bg-dark text-center text-white">
                    <div class="container p-4 pb-0">
                        <section data-aos="flip-left" className="mb-4">
                            <a className="btn btn-outline-light btn-floating m-1" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/paul-barbey-31b8481aa/" role="button"
                            ><i className="fab fa-linkedin-in"></i ></a>
                            <a className="btn btn-outline-light btn-floating m-1" rel="noreferrer" target="_blank" href="https://github.com/Barbeypaul" role="button"
                            ><i className="fab fa-github"></i></a>
                        </section>
                    </div>

                    <div className="text-center p-3 col">
                        <div className="align-items-center">
                            <p><i className="fas fa-envelope"></i> paulbarbey@hotmail.fr</p>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default footer
