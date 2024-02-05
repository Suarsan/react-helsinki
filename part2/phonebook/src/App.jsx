import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleChange = (e) => {
    setNewName(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()
    const updatedpersons = [ ...persons, { name: newName } ]
    setPersons(updatedpersons)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleChange}/>
        </div>
        <div>
          <button type="submit" onClick={handleClick}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        { persons.map(p => <li key={p.name}>{p.name}</li>) }
      </ul>
    </div>
  )
}

export default App