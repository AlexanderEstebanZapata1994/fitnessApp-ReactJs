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
    
    //Eventos del formulario
    handleChange = (e) =>{        
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name] : e.target.value
            }
        })
    }

    handleSubmit = async e => {
        e.preventDefault()
        try {
            let config = {
                method : 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            }
            console.log(config.body)
            const url = 'http://localhost:8000/api/exercises'
            let res = await fetch(url, config)
            let json = await res.json()



        } catch (error) {
            
        }
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
                                onSubmit={this.handleSubmit}
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