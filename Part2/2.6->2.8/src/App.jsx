import { useState } from 'react'

const Header = ({ text }) => <h2> {text} </h2>

const Form = ({newName, newNumber, addContact, handleNameChange, handleNumberChange}) => {
  
  return (
    <form onSubmit={addContact}>
      <div>
        name: <input  value={newName}  onChange={handleNameChange}  />
      </div>
      <div>number: <input value={newNumber}  onChange={handleNumberChange}/></div>
      <div><button type="submit">add</button></div>
    </form>
  )
}

const List = ({persons}) => {
  return (
    <div>
      {
        persons.map(person => ( <p key={person.name}>{person.name} {person.number}</p>))
      }
    </div>
    )
}

const App = () => {
  // Where all numbers will be stored
  const [persons, setPersons] = useState([ 
    { name: 'Arto Hellas', number: '+12346789'}
  ]) 

  // For inserting one Contact
  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')
  
  
  // Setting value each time the user enters something in input field
  // it sets the newName to the value present in the input filed 
  // 'before even submitting or clicking add button'
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const nameExists = persons.some(person => person.name === newName);

  //Creating a new contact object and adding it to the persons array
  const addContact = (event) => {
    event.preventDefault()

    if (nameExists) 
    {
       alert(`${newName} is already added to the phonebook`)
       setNewName(' ')
       setNewNumber('')
       return
    }
    // console.log('newName1', newName)
    const contactObj = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1)
    }
    setPersons(persons.concat(contactObj))
    // console.log('check', contactObj)
    setNewName(' ')
    setNewNumber('')

    // console.log('newName2', newName)
  }


  return (
    <div>
      <Header text="Phonebook" />
      <Form  
        newName={newName} 
        newNumber={newNumber}
        addContact={addContact} 
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}/>
      <Header text="Numbers" />
      <ul>
        {
          <List persons={persons}/>
        }
      </ul>
    </div>
  )
}

export default App