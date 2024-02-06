import { useState, useEffect } from 'react'
import Filter from './Filter'
import Persons from './Persons'
import PersonForm from './PersonForm'
import Notification from './Notification'
import personsService from './services/notes'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')
  const [message, setMessage] = useState('')

  const addPerson = (person) => { personsService.add(person).then(person => setPersons([ ...persons, person ])) }
  const refreshPersons = () => { personsService.getAll().then(persons => setPersons(persons)) }
  useEffect(refreshPersons, [])

  const handleNameChange = (e) => setNewName(e.target.value)
  const handleNumberChange = (e) => setNewNumber(e.target.value)
  const handleFilterValueChange = (e) => setFilterValue(e.target.value)
  const checkIfNameAlreadyExists = (persons, name) =>  persons.find(p => p.name === name)
  const filteredPersons = persons.filter(p => p.name.toLowerCase().includes(filterValue.toLowerCase()))
  const handleAdd = (e) => {
    e.preventDefault()
    if (checkIfNameAlreadyExists(persons, newName)) {
      const confirmed = confirm(`'${newName}' is already added to phonebook, replace the old number with a new one?`)
      if (confirmed) {
        personsService
          .update({ ...persons.find(p => p.name === newName), number: newNumber })
          .then(person => {
            setPersons(persons.map(p => p.id === person.id ? person : p))
            setMessage(`'${person.name}' has been updated successfully`)
            setTimeout(() => setMessage(null), 3000)
          })
      }
    } else {
      addPerson({ name: newName, number: newNumber, id: `${persons.length + 1}` })
      setMessage(`'${newName}' has been added successfully`)
      setTimeout(() => setMessage(null), 3000)
    }
    setNewName('')
    setNewNumber('')
  }
  const handleDelete = (person) => {
    const confirmed = confirm(`Delete '${person.name}'`)
    if (confirmed) {
      personsService.remove(person.id).then(res => {
        setPersons(persons.filter(p => p.id !== res.id))
        setMessage(`'${res.name}' has been deleted successfully`)
        setTimeout(() => setMessage(null), 3000)
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        filterValue={filterValue} 
        handleFilterValueChange={handleFilterValueChange} />
      <PersonForm 
        nameValue={newName} 
        nameOnChange={handleNameChange} 
        numberValue={newNumber} 
        numberOnChange={handleNumberChange} 
        addClick={handleAdd}/>
      <Notification message={message}/>
      <h2>Numbers</h2>
      <Persons 
        persons={filteredPersons} 
        handleDelete={handleDelete}/>
    </div>
  )

}

export default App