const PersonForm = ({ nameValue, nameOnChange, numberValue, numberOnChange, addClick }) => {
  
  return (
    <form>
      <div>
        name: <input value={nameValue} onChange={nameOnChange} />
      </div>
      <div>
        number: <input value={numberValue} onChange={numberOnChange} />
      </div>
      <div>
        <button type="submit" onClick={addClick}>add</button>
      </div>
    </form>
  )

}

export default PersonForm