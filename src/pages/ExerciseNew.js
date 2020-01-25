import React from 'react'

import ExerciseForm from '../components/ExerciseForm'
import Card from '../components/Card'

class ExerciseNew extends React.Component{


state = {
    form : {
        txtTitulo:'', 
        txtDescripcion:'',
        txtImagenRuta:'',
        txtColorIzquierdo:'',
        txtColorDerecho:''
    }
}

    handleChange = (e) =>{        
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name] : e.target.value
            }
        })
    }

    render(){
        return(
            <div className="jumbotron">
                <div className="container">
                    <div className="row">
                        <h1 className="display-4">Añadiendo un nuevo ejercicio</h1>
                    </div>
                    <hr className="my-4"/>
                    <div className="row">
                        <div className="col-md">
                            <Card
                                {...this.state.form}
                            />
                        </div>
                        <div className="col-md">
                            <ExerciseForm
                                onChange={this.handleChange}
                                form={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExerciseNew