export const Header = ({ text }) => <h2> {text} </h2>

export const Form = ({newName, newNumber, addContact, handleNameChange, handleNumberChange}) => {
  
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



export const List = ({persons}) => {
  // const filtereds = []
  // const res1 = filtereds.map(filtered => {
  //   return (
  //     <li key={filtered.id}>
  //       {filtered.name} {filtered.number}
  //     </li> 
  //   )})
  // const res2 = persons.map(person => {
  //   return (
  //     <li key={person.id}>
  //       {person.name} {person.number}
  //     </li> 
  //   )})
  
  return (
    <div>
      {
          persons.map(person => ( <li key={person.id}> {person.name} {[person.number]}</li>))
      }
    </div>
    )

}