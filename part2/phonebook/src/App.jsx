import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', phone: '123456789' }]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const handleNameChange = (e) => setNewName(e.target.value)
  const handlePhoneChange = (e) => setNewPhone(e.target.value)

  const handleClick = (e) => {
    e.preventDefault()
    if (checkIfNameAlreadyExists(persons, newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons([ ...persons, { name: newName, phone: newPhone } ])
    }
    setNewName('')
    setNewPhone('')
  }

  const checkIfNameAlreadyExists = (persons, name) =>  persons.find(p => p.name === name)

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newPhone} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit" onClick={handleClick}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        { persons.map(p => <li key={p.name}>{p.name} {p.phone}</li>) }
      </ul>
    </div>
  )
}

export default App