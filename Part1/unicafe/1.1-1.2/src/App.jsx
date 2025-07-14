import { useState } from "react"

                               /* PART 1.1 - 1.2 */

//// The header function remains unchanged for the 2 parts
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


const Content = (props) => {
    return (
        <div>
            <Part part={props.part1} exercise={props.exercise1} />
            <Part part={props.part2} exercise={props.exercise2} />
            <Part part={props.part3} exercise={props.exercise3} />
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
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <Header course={course} />
            <Content part1={part1} exercise1={exercises1} />
            <Content part2={part2} exercise2={exercises2} />
            <Content part3={part3} exercise3={exercises3} />
            <Total total={exercises1 + exercises2 + exercises3} />
        </div>
    )
}

export default App
 
//export default App
