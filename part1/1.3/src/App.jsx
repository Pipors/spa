import { useState } from "react"

                               /* PART 1.1 - 1.2 */

// The header function remains unchanged for the 2 parts
const Header = ({ course }) => {
    console.log("course:", course)
    return (
        <div>
            <h1>{course}</h1>
        </div>
    )
}


const Part = ({ part, exercise }) => {
    return (
        <p> {part} {exercise}</p>
    )
}


const Content = ({parts}) => {
    return (
        <div>
            <Part part={parts[0].part1} exercise={parts[0].exercises1} />
            <Part part={parts[1].part2} exercise={parts[1].exercises2} />
            <Part part={parts[2].part3} exercise={parts[2].exercises3} />
        </div>
    )
}

const Total = ({ total }) => {
    return (
        <div>
            <p>Number of exercises {total}</p>
        </div>
    )
}


const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
            part1: 'Fundamentals of React',
            exercises1: 10
        },
        {
            part2: 'Using props to pass data',
            exercises2: 7
        },
        {
            part3: 'State of a component',
            exercises3: 14
        }
    ];


    return (
        <>
            <Header course={course} />
            <Content parts={parts} />
            <Total total={parts[0].exercises1 + parts[1].exercises2 + parts[2].exercises3} />
        </>
    )
}
 
export default App
