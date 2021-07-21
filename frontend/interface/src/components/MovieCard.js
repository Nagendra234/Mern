import React, { Component } from 'react'
import './style.css'
import crd1 from "../images/Card1.jpg"
import crd2 from "../images/Card2.jpg"
import crd3 from "../images/Card3.jpg"
class MovieCard extends Component {
    render() {
        return (
            <div>
                <div className="card1" >
                    <a href="/pushpa">
                        <img src={crd1} className="card-img" alt="..." />
                    </a>
                    <div className="card-body">
                        <h5 className="card-title">Pushpa</h5>
                    </div>
                </div>
                <div className="card2" >
                    <a href="/kgf2">
                        <img src={crd2} className="card-img" alt="..." />
                    </a>
                    <div className="card-body">
                        <h5 className="card-title">KGF 2</h5>
                    </div>
                </div>
                <div className="card3" >
                    <a href="/radhesyam">
                        <img src={crd3} className="card-img" alt="..." />
                    </a>
                    <div className="card-body">
                        <h5 className="card-title">Radhe Syam</h5>
                    </div>
                </div>

            </div>

        )
    }
}

export default MovieCard
