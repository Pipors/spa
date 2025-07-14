import { useState } from 'react'

// From 1.12 to 1.14

const Button = ({ onClick, text }) => <button onClick={onClick}> {text} </button>

const Part = ({ selected }) => <p>has {selected} votes</p>

const Header = ({ text }) => <h1> {text} </h1>

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    let index = 0
    const [selected, setSelected] = useState(0)
    const [arr, setArr] = useState({
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0
    })

    //const [highestVote, setHighestVote] = useState(0)
    let highestVote = 0
    const handleClick = () => {

        /*setSelected is async function so the value of selected wont be update instantly 
        so the value of selected at the time of calling the function 'selected' still holds the value of the last render*/
        setSelected(Math.floor(Math.random() * anecdotes.length))

        //console.log("selected 1:", selected)
    }


    const handleVote = () => {
       // Create a copy of the arr object to avoid mutating the original state directly.
       // The spread operator (...) is used to create a shallow copy of the arr object.
       const copy = { ...arr };
    
       // Increment the vote count for the currently selected anecdote.
       copy[selected] += 1;
    
        // Update the state with the modified copy.
       setArr(copy);
       //console.log(copy);
    }

    let maxEntry = 0
    return (
        <div>
            <Header text="Anecdote of the day" />
            {anecdotes[selected]}
            <br></br>
            <br></br>
            <Part selected={arr[selected]} />
            <Button onClick={handleVote} text="vote" />
            <Button onClick={handleClick} text="next anectode" />
            <Header text="Anecdote with the most votes" />
            {anecdotes[(Object.entries(arr).reduce((max, current) => current[1] > max[1] ? current : max))[0]]}
        </div>
    )
}

export default App