import React from 'react'
import CircleImg from '../images/circles.png'
import './Styles/Card.css'

class Card extends React.Component{


    render(){
        const {txtTitulo, txtDescripcion, txtImagenRuta, txtColorIzquierdo, txtColorDerecho} = this.props
        return (
            <div className="card mx-auto Fitness-Card"style={{
                backgroundImage:`url(${CircleImg}), linear-gradient(to right, ${txtColorIzquierdo}, ${txtColorDerecho})`
            }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-4">
                            <img src={txtImagenRuta} alt={txtTitulo}/>
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