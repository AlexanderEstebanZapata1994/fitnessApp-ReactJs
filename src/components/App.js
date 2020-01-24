import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Exercises from '../pages/Exercise'
import ExserciseNew from '../pages/ExerciseNew'
import NotFound from '../pages/NotFound'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/exercise" component={Exercises}/>
                <Route exact path="/exercise/New" component={ExserciseNew}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}
export default App