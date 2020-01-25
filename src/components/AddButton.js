import React from 'react'
import addButtonImg from '../images/add.png'
import {Link} from 'react-router-dom'

const AddButton = () =>(
    <Link to="/Exercise/New">
        <img alt="add-button" className="mx-auto d-block" src={addButtonImg}></img>
    </Link>
)

export default AddButton