const Persons = ({ persons, handleDelete }) => {

  return <ul>{ persons.map(p => <li key={p.name}>{p.name} {p.number} <button onClick={() => { handleDelete(p) }}>delete</button></li>) }</ul>

}

export default Persons