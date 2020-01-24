import React from 'react'
import addButtonImg from '../images/add.png'
import {Link} from 'react-router-dom'

class AddButton extends React.Component{
    render(){
        return(
            <Link to="/Exercise/New">
                <img alt="add-button" className="mx-auto d-block" src={addButtonImg}></img>
            </Link>
        )
    }
}

export default AddButton