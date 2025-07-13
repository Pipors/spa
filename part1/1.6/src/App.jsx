import { useState } from "react"

/* PART 1.6 */

const Part = ({ text, value }) => <p>{text} {value}</p>

const Header = ({ text }) => <h1>{text}</h1>

const Button = (props) => <button onClick={props.onClick}> {props.text}</button>

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    console.log(good)
    const handlegood = () => setGood(good + 1)
    const handleneutal = () => setNeutral(neutral + 1)
    const handlebad = () => setBad(bad + 1)
    return (
        <div>
            <Header text="give feedback" />
            <Button onClick={handlegood} text="good" />
            <Button onClick={handleneutal} text="neutral" />
            <Button onClick={handlebad} text="bad" />
            <Header text="statistics" />
            <Part text="good" value={good} />
            <Part text="neutral" value={neutral} />
            <Part text="bad" value={bad} />
        </div>
    )
}

export default App