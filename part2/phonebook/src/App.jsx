import { useState, useEffect } from 'react'
import Filter from './Filter'
import Persons from './Persons'
import PersonForm from './PersonForm'
import axios from 'axios'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')
  
  const getPersons = () => { axios.get('http://localhost:3001/persons').then(o => setPersons(o.data)) }
  useEffect(getPersons, [])

  const handleNameChange = (e) => setNewName(e.target.value)
  const handleNumberChange = (e) => setNewNumber(e.target.value)
  const handleFilterValueChange = (e) => setFilterValue(e.target.value)
  const checkIfNameAlreadyExists = (persons, name) =>  persons.find(p => p.name === name)
  const filteredPersons = persons.filter(p => p.name.toLowerCase().includes(filterValue.toLowerCase()))
  const handleClick = (e) => {
    e.preventDefault()
    if (checkIfNameAlreadyExists(persons, newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons([ ...persons, { name: newName, number: newNumber } ])
    }
    setNewName('')
    setNewNumber('')
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterValue={filterValue} handleFilterValueChange={handleFilterValueChange} />
      <PersonForm nameValue={newName} nameOnChange={handleNameChange} numberValue={newNumber} numberOnChange={handleNumberChange} addClick={handleClick}/>
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App