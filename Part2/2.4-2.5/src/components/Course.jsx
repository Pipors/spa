const Part = ({ name, exercises }) => <p> {name} {exercises} </p>


const Header = ({ text }) => <h1> {text} </h1>


const Total= ({ parts }) => {
    const sum = parts.reduce((acc, part) => {
        return acc + part.exercises
    }, 0)

    return (

        <strong>total of {sum} exercises</strong>

    )
}

const Content = ({ courses }) => {

    return (
        <>
        {
                courses.map(course => {
                //console.log('course inner object',course)
                const { name, id, parts } = course
                    return (
                    <div key={id}>
                        <Header text={name} />
                        {
                            parts.map(part => (
                                //console.log('course child object', part),
                                <Part key={part.id} name={part.name} exercises={part.exercises} />
                            ))
                        }
                        <Total parts={parts} />
                    </div>
                )
            })
        }
        </>
    )
}


const Course = ( {courses} ) => {

    return (
        <div>
            {/*{console.log('hey anas') }*/}
            <Content courses={courses} />
        </div>
    )

}

export default Course