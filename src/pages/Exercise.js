import React from 'react';

//Importamos los componentes
import Title from '../components/Title'
import ExerciseList from '../components/ExerciseList'
import AddButton from '../components/AddButton'
import Loading from '../components/Loading'

const Exercise = ({loading, userName, exercisesData}) => {
    if (loading) 
        return <Loading />        
    
    return(
        <div>
            <Title username = {userName}/>
            <ExerciseList exercises= {exercisesData}/>
            <AddButton/>
        </div>
    )
}

export default Exercise;