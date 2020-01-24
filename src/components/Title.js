import React from 'react'
import './Styles/Title.css'

function Title(props) {
    return (
        <div className="container">
            <div className="Fitness-User-Info">
                <h1>Hello {props.userName}</h1>
                <p>Let's workout to get someone gains!</p>
            </div>
        </div>
    )
}

export default Title