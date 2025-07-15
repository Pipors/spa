const Part = ({ name, exercises }) => <p> {name} {exercises} </p>


const Header = ({ text }) => <h1> {text} </h1>


const Total = ({ parts }) => {

    let sum = 0
    parts.map(part => { 
        sum += part.exercises
    })
    return (
        <p>total of {sum} exercises</p>
    )
}


const Total_ = ({ parts }) => {



    const sum = parts.reduce((acc, part) => {
        return acc + part.exercises
    }, 0)

    return (

        <p>total of {sum} exercises</p>

    )
}
const Content = ( {course} ) => {
    const { name, parts } = course                //destructuring course
    return (
        <div>
            <Header text={name} />
            {
                    parts.map(part => (
                        <Part key={part.id} name={part.name} exercises={part.exercises} />
                    ))
            }
            <Total_ parts={course.parts} />             {/* PART 2.3 */}
            {/*<Total parts={course.parts} /> */}       {/* PART 2.2 */}
        </div>
    )
}

const Course = ( {course} ) => {
    const { parts } = course

    return (
        <div>
            <Content course={course} />
        </div>
    )

}


export default Course