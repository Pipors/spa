import { useState } from "react"

/* PART 1.4-1.5 */

// The header function remains unchanged for the 2 parts
const Header = ( course ) => {
    console.log("course:", course.name)
    return (
        <div>
            <h1>{course.name}</h1>
        </div>
    )
}


const Part = ({ part }) => {
    return (
        <p> {part.name} {part.exercises}</p>
    )
}


const Content = ({ course }) => {
    console.log('course.parts:', course.parts)
    return (
        <div>
            {
                course.parts.map((part, index) => (
                    <Part key={index} part={part} />
                ))
            }
        </div>
    )
}

const Total = ({course}) => {
    let total = 0
    course.parts.map((part) => (
        total += part.exercises
    ))
    return (
        <div>
            <p>Number of exercises {total}</p>
        </div>
    )
}



const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    )
}

export default App