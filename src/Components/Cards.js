import React from "react"
import Moment from 'react-moment';
import 'moment-timezone';

function Cards(){

    return(
        <div className="card" style="width: 300px;">
            <img src="images/sample.svg" className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                    <h5 className="card-title">Alice Liddel</h5>
                    <p className="card-text">Alice is a freelance web designer and developer based in London. She is
                        specialized in HTML5, CSS3, JavaScript, Bootstrap, etc.</p>
                    <a href="#" className="btn btn-primary">View Profile</a>
                </div>
        </div>

    )
}
