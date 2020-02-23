import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

//Mapeamos las diferentes páginas para mostrar
import ExercisesContainer from '../pages/ExerciseContainer'
import ExserciseNewContainer from '../pages/ExerciseNewContainer'
import NotFound404 from '../pages/404'


const App = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/exercise" component={ExercisesContainer}/>
            <Route exact path="/exercise/New" component={ExserciseNewContainer}/>
            <Route component={NotFound404}/>
        </Switch>
    </BrowserRouter>
)
export default App