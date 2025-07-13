import { StatisticLine, Button, Header } from './Utils'
import { useState } from 'react'

/* 1.8 */

const Statistics = ( props ) => {

    // The Statistics component receives a single 'props' object as its argument.
    // This object contains the properties 'good', 'neutral', 'bad', and 'all',
    // which are passed from the parent App component.
    // These properties are accessed using 'props.<property_name>' syntax.
    // To call the Statistics component in the App component,
    // use the spread operator to pass all required properties, like so:
    // <Statistics {...props} /> , FYI this method can be used if you define an props object in the App component see Line: 185
    // Othewise you can call the Statistics component inside App components by just specifying each value separatly
    if (props.all === 0) return <p>No feedback given</p>

    return (
        <table>
            <tbody>
               <StatisticLine text="good" value={props.good} /> 
               <StatisticLine text="neutral" value={props.neutral} /> 
               <StatisticLine text="bad" value={props.bad} /> 
               <StatisticLine text="all" value={props.all} /> 
               <StatisticLine text="average" value={(props.good - props.bad) / props.all} /> 
               <StatisticLine text="positive" value={(props.good / props.all) * 100 + '%'} /> 
            </tbody>
        </table>
    )
}

const App = () => {
    // save clicks of each button to its own                                       
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)

    //const props = {                                                                
    //    good: good,                                                                
    //    neutral: neutral,                                                          
    //    bad: bad,                                                                  
    //    all: all                                                                   
    //}                                                                              


    console.log("good", good)
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
    console.log("all", all)

    return (
        <div>
            <Header text="give feedback" />
            <Button onClick={handlegood} text="good" />
            <Button onClick={handleneutal} text="neutral" />
            <Button onClick={handlebad} text="bad" />
            <Header text="statistics" />


            {/* this call if you want to create an props in App*/}
            {/* uncomment to props obj in line 185 and the line below to check this method*/}

            { /*<Statistics {...props} />*/}

            {/* if you want to assign value directly to the variables used in Statistics component*/}
            <Statistics good={good} neutral={neutral} bad={bad} all={all} />
        </div>
    )
}
export default App
