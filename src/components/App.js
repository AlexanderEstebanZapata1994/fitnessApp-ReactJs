import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

//Mapeamos las diferentes páginas para mostrar
import Exercises from '../pages/Exercise'
import ExserciseNew from '../pages/ExerciseNew'
import NotFound404 from '../pages/404'


const App = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/exercise" component={Exercises}/>
            <Route exact path="/exercise/New" component={ExserciseNew}/>
            <Route component={NotFound404}/>
        </Switch>
    </BrowserRouter>
)
export default App