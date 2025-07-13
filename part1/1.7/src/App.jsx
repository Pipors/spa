import { useState } from "react"
import { Part, Header, Button } from "./Utils"

/* PART 1.7 */


const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)


    console.log(good)
    const handlegood = () => {
        setGood(good + 1)
        setAll(all + 1)
    }
    const handleneutal = () => {
        setNeutral(neutral + 1)
        setAll(all + 1)
    }
    const handlebad = () => {
        setBad(bad + 1)
        setAll(all + 1)
    }
    console.log(all)


    return (
        <div>
            <Header text="give feedback" />
            <Button onClick={handlegood} text="good" />
            <Button onClick={handleneutal} text="neutral" />
            <Button onClick={handlebad} text="bad" />
            <Header text="statistics" />
            {/*<Statistics props={all} />*/}
            <Part text="good" value={good} />
            <Part text="neutral" value={neutral} />
            <Part text="bad" value={bad} />
            <Part text="all" value={all} />
            <Part text="average" value={(good - bad) / all} />
            <Part text="positive" value={good / all * 100 + '%'} />

        </div>
    )
}

export default App