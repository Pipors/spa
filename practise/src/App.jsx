import { createElement, useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  
  // this is the array that will hold all the notes  
  const [notes, setNotes] = useState(props.notes)  

  // this the single note that will add the array above
  const [newNote, setNewNote] = useState('') 
  
  // this state is for tracking the important notes
  const [showAll, setShowAll] = useState(true) 


  /* Evaluate the value of showAll if true returns the hole notes array 
    otherwise it returns the notes marked as important from the array notes */
  // this means that noteToShow will be all an array which makes us apply the .map function
 const noteToShow = showAll ? notes : notes.filter(note => note.important /*=== true*/)




  const addNote = (event) => {
    event.preventDefault()
    // console.log("button clicked", event.target)
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(notes.length + 1)
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }




  const handleNoteChange = (event) => {
    // console.log(event.target.value)
    // console.log(event.target)
    setNewNote(event.target.value)
  }

  /* The 'event' parameter passed to this function below will refer to 
   the html line for creating the button <button>...</button> */
  
  // const handleOnclick = (event) => {
  //   console.log("target when the button is clicked", event.target)
  // } 

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => {setShowAll(!showAll)}}>
          show {showAll ? 'important': 'all'}
        </button>
      </div>

      <ul>
        {/* {console.log(noteToShow)} */}
        {
          // console.log(noteToShow)
          noteToShow.map(note => 
          <Note key={note.id} note={note} />)
        }
      </ul>
      <form onSubmit={addNote}>
        {/* The onChange attribute of the input element listen about every second on the input 
           field once you type something it is considered as a change whitout even submitting  */}
        <input placeholder='enter your note' value={newNote} onChange={handleNoteChange}/>
        <button type="submit" /*onClick={handleOnclick}*/>save</button>
      </form>
    </div>
  )
}

export default App 