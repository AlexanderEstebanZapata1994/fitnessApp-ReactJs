import React from 'react'

import Exercise from "../pages/Exercise"
import Loading from '../components/Loading'
import FatalError from "../pages/500"
import useFetch from '../hooks/useFetch'
import url from '../config'

const ExerciseContainer = () => {
    
    const {data, loading, error} = useFetch(`${url}/exercises`)
    
        if (loading)
            return <Loading />

        if (error) 
            return <FatalError />

        return <Exercise
            loading = {loading}
            userName = "Alexander Zapata"
            exercisesData = {data} 
            />
}
export default ExerciseContainer