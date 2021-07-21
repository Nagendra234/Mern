import React, { Component } from 'react'
import crd from '../images/Card2.jpg'

class Kgf extends Component {
    render() {
        return (
            <div>
                <div className="ps">
                    <img src={crd} alt="pushpa-image" className="mvimg" />
                </div>
                <div>
                    <h2 className="movie-head">Details Of the Movie</h2>
                    <p className="descsription"><strong>Pushpa</strong> is Upcoming Movie. Futured Stars are hero as <strong>Allu Arjun</strong> and Heroine as <strong>Rashmika</strong> and this movie Directed By<strong> Sukumar</strong> </p>
                    <div>
                        <table className="movie-details" cellpadding="5" cellspacing="5">
                            <tr>
                                <td>Produced By</td>
                                <td>Naveen and N. Ravi Shankar</td>
                            </tr>
                            <tr>
                                <td>Starring</td>
                                <td>Allu Arjun Fahadh Faasil Rashmika Mandanna</td>
                            </tr>
                            <tr>
                                <td>Cinematography	</td>
                                <td>Mirosław Kuba Brożek</td>
                            </tr>
                            <tr>
                                <td>Edited by	</td>
                                <td>Karthika Srinivas</td>
                            </tr>
                            <tr>
                                <td>Story & Direction By </td>
                                <td>Sukumar</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Kgf
