import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

//Mapeamos las diferentes páginas para mostrar
import Exercises from '../pages/Exercise'
import ExserciseNew from '../pages/ExerciseNew'
import NotFound from '../pages/NotFound'


const App = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/exercise" component={Exercises}/>
            <Route exact path="/exercise/New" component={ExserciseNew}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)
export default App