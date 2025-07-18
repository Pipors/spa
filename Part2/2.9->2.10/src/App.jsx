import { useEffect, useState } from 'react'
import {Form, List, Header} from './components/Utils'

const Reder = ({filtered, persons}) => {
  if (filtered.length !== 0) 
  {
    return <List persons={filtered} /> 
  }
  else 
  {
    return <List persons={persons} />
  }
}

const App = () => {


  // Where all numbers will be stored
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])


  // const [foundPerson, setFoundPerson] = useState([])

  // For inserting one Contact
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [filtered, setFiltered] = useState([...persons])
  

  // Setting value each time the user enters something in input field
  // it sets the newName to the value present in the input filed 
  // 'before even submitting or clicking add button'
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchPerson = (event) => {
    setNewSearch(event.target.value)

    let results = persons.filter(person =>
      person.name.toLowerCase().includes(event.target.value.toLowerCase())
    )
    console.log('res', results)
    setFiltered(results)
  }



  const nameExists = persons.some(person => {
    return (
      // console.log('newname',newName),
      // console.log('person',person.name),
      person.name === newName)
  });
  
  
  //Creating a new contact object and adding it to the persons array
  const addContact = (event) => {
    event.preventDefault()
    // console.log('name1',newName, 'number1',newNumber)
    // console.log('ne',nameExists)
    
    if (nameExists) 
    {
      // persons.pop()
      alert(`${newName} is already added to the phonebook`)
      setNewName('')
      setNewNumber('')
      return
    }
    
    const contactObj = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1)
    }
    
    // console.log('person',persons)
    
    
    // console.log(persons)
    // console.log('check', contactObj)
    // refactor(setNewName, setNewNumber)
    setNewName('')
    setNewNumber('')
    setPersons(persons.concat(contactObj))
    console.log('name',newName, 'number',newNumber)
  }
  

  return (
    <div>
      <Header text="Phonebook" />
      <form onSubmit={(e)=> {e.preventDefault()}}> 
        Filter shown with: 
        <input  onChange={handleSearchPerson} value={newSearch}/>
      </form>
      <Header text="add a new" />
      <Form  
        newName={newName} 
        newNumber={newNumber}
        addContact={addContact} 
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}/>
      <Header text="Numbers" />
      <ul>
        {
          <Reder filtered={filtered} persons={persons} />
          
        }
        {/* <List persons={persons} />  */}
      </ul>
    </div>
  )
}

export default App