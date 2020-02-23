import React from 'react';

import ExerciseForm from '../components/ExerciseForm'
import Card from '../components/Card'
const ExerciseNew = ({form, onChange, onSubmit}) =>(
    <div className="jumbotron">
        <div className="container">
            <div className="row">
                <h1 className="display-4">Añadiendo un nuevo ejercicio</h1>
            </div>
            <hr className="my-4"/>
            <div className="row">
                <div className="col-md">
                    <Card
                        {...form}
                    />
                </div>
                <div className="col-md">
                    <ExerciseForm
                        onChange={onChange}
                        onSubmit={onSubmit}
                        form={form}
                    />
                </div>
            </div>
        </div>
    </div>
 )

export default ExerciseNew