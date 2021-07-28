import React, { Component } from 'react'

export class MonParcours extends Component {
    render() {
        return (
            <div>
                <div className="container p-5">
                    <h2><i class="fas fa-address-card mb-5"></i> MonParcours</h2>
                    <div className="text-white row pb-3 pt-3 box-timeline1">
                        <div data-aos="fade-left"
                            data-aos-duration="1000">
                            <h4 className="d-flex justify-content-start text-dark text-start">Diplômé Bac Sti2d Énergie et Environnement</h4>
                            <p className="d-flex justify-content-start text-dark text-start"><i className="far fa-calendar-alt"> 2017</i></p>
                            <p className="d-flex justify-content-start text-dark text-start">Lycée Julliot de la Morandière Granville (Manche)</p>
                        </div>
                    </div>
                    <div className=" row pb-3 pt-3 box-timeline2">
                        <div data-aos="fade-right"
                            data-aos-duration="1500">
                            <h4 className="d-flex justify-content-end text-dark text-end ">Diplômé BTS Électrotechnique</h4>
                            <p className="d-flex justify-content-end text-dark text-end"><i className="far fa-calendar-alt"> 2019</i></p>
                            <p className="d-flex justify-content-end text-dark text-end">Lycée Julliot de la Morandière Granville (Manche)</p>
                        </div>
                    </div>
                    <div className=" row pb-3 pt-3 box-timeline1">
                        <div data-aos="fade-left"

                            data-aos-duration="2000">
                            <h4 className="d-flex justify-content-start text-dark text-start">Diplômé Bac+3 Formation Développeur web</h4>
                            <p className="d-flex justify-content-start text-dark text-start"><i className="far fa-calendar-alt"> 2020</i></p>
                            <p className="d-flex justify-content-start text-dark text-start">Digital Campus Rennes (Ille-et-Vilaine)</p>
                        </div>
                    </div>
                    <div className=" row pb-3 pt-3 box-timeline3">
                        <div data-aos="fade-right"
                            data-aos-duration="2500">
                            <h4 className="d-flex justify-content-end text-dark text-end">Stage Développeur Back-end/Front-end chez U GIE IRIS service RH Communication</h4>
                            <p className="d-flex justify-content-end text-dark text-end"><i className="far fa-calendar-alt"> 2020/2021</i></p>
                            <p className="d-flex justify-content-end text-dark text-end">U GIE IRIS Nantes (Loire-Atlantique)</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MonParcours
