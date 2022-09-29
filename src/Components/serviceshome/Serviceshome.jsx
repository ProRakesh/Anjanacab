import React from 'react'
import './Serviceshome.css'
const Serviceshome = (props) => {



    return (
        <>


                <div className="card">
                    <img className="card-img " alt='Car' src={props.imagename} />
                    <div className="card-body">
                        <h3 className="card-title">{props.Card_title}</h3>
                        <p className="card-text ">
                            {props.Card_text}</p>
                    </div>
















          


            </div>


        </>

    )
}

export default Serviceshome;