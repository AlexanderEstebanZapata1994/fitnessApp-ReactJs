import React from 'react'

//Importamos los componentes
import Title from '../components/Title'
import ExerciseList from '../components/ExerciseList'
import AddButton from '../components/AddButton'
import Loading from '../components/Loading'

class Exercises extends React.Component{

    state = {
        data :[],
        loading: true,
        error: null
    }

    async componentDidMount(){
        await this.fetchExercises()
    }

    fetchExercises = async () =>{
        try {
            const url = 'http://localhost:8000/api/exercises'
            let response = await fetch(url)

            const data = await response.json()
            this.setState({data, loading:false})
        } catch (error) {
            this.setState({ loading:false, error})
        }
    }

    render(){
        if (this.state.loading) 
            return <Loading />        
        
        return(
            <div>
                <Title
                    userName="Alex"
                />
                <ExerciseList
                    exercises= {this.state.data}
                />

                <AddButton/>
            </div>
        )
    }
}

export default Exercises