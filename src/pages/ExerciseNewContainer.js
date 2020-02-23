import React from 'react'

import FatalError from './500'
import ExerciseNew from './ExerciseNew'
import Loading from '../components/Loading'


class ExerciseNewContainer extends React.Component{


    state = {
        form : {
            txtTitulo:'', 
            txtDescripcion:'',
            txtImagenRuta:'',
            txtColorIzquierdo:'',
            txtColorDerecho:''
        },
        loading:false, 
        error: null
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
        this.setState({
            loading : true
        })
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
            //const url = 'http://localhost:8000/api/exercises'
            //let res = await fetch(url, config)
            //let json = await res.json()

            this.setState({
                loading : false
            })

            this.props.history.push('/Exercise')

        } catch (error) {

            this.setState({
                loading : false,
                error
            })
        }
    }

    render(){
        if (this.state.loading) 
            return <Loading />
        
        if (this.state.error) 
            return <FatalError />
        return(
            <ExerciseNew 
                form = {this.state.form}
                onChange = {this.handleChange}
                onsubmit= {this.handleSubmit}
            />
        )
    }
}

export default ExerciseNewContainer