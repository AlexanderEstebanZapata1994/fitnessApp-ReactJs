import React from 'react'
import Card from './Card'

const ExerciseList = ({exercises}) => (
    <div>
        {exercises.map((exercise) =>(
            <Card
                key={exercise.id}
                txtTitulo={exercise.title}
                txtDescripcion={exercise.description}
                txtImagenRuta={exercise.img}
                txtColorIzquierdo={exercise.leftColor}
                txtColorDerecho={exercise.rightColor}
            />
            
        ))}
    </div>
)

export default ExerciseList