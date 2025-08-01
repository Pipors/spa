import { useState } from "react"

/* PART 1.3 */

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


const Content = (parts) => {
    const { part1, part2, part3, exercises1, exercises2, exercises3 } = parts
    return (
        <div>
            <Part part={part1} exercise={exercises1} />
            <Part part={part2} exercise={exercises2} />
            <Part part={part3} exercise={exercises3} />
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
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }

    return (
        <div>
                <Header course={course} />
                <Content
                    part1={part1.name} exercises1={part1.exercises}
                    part2={part2.name} exercises2={part2.exercises}
                    part3={part3.name} exercises3={part3.exercises}
                />
                <Total total={part1.exercises + part2.exercises + part3.exercises} />
        </div>
    )
}

export default App
