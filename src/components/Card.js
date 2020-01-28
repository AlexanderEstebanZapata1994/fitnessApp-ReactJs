import React from 'react'
import CircleImg from '../images/circles.png'
import emptyCard from '../images/empty.png'
import './Styles/Card.css'

class Card extends React.Component{


    render(){
        const {txtTitulo, txtDescripcion, txtImagenRuta, txtColorIzquierdo, txtColorDerecho} = this.props
        return (
            <div className="card mx-auto Fitness-Card"style={{
                backgroundImage:`url(${CircleImg}), linear-gradient(to right, ${txtColorIzquierdo || '#56CCF2'}, ${txtColorDerecho || '#2F90ED'})`
            }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-4">
                            <img src={txtImagenRuta || emptyCard} alt={txtTitulo}/>
                        </div>
                        <div className="col-8 Fitness-Card-Info">
                            <h1>{txtTitulo}</h1>
                            <p>{txtDescripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Card