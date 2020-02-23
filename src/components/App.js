import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

//Mapeamos las diferentes páginas para mostrar
import Exercises from '../pages/Exercise'
import ExserciseNewContainer from '../pages/ExerciseNewContainer'
import NotFound404 from '../pages/404'


const App = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/exercise" component={Exercises}/>
            <Route exact path="/exercise/New" component={ExserciseNewContainer}/>
            <Route component={NotFound404}/>
        </Switch>
    </BrowserRouter>
)
export default App