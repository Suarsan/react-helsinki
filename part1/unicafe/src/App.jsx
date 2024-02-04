import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodRating = () => {
    const updatedGoodRating = good + 1;
    setGood(updatedGoodRating)
  }
  const neutralRating = () => {
    const updatedNeutralRating = neutral + 1;
    setNeutral(updatedNeutralRating)
  }
  const badRating = () => {
    const updatedBadRating = bad + 1;
    setBad(updatedBadRating)
  }

  return (
    <div>
      <h2>givefeedback</h2>
      <button onClick={goodRating}>good</button>
      <button onClick={neutralRating}>neutral</button>
      <button onClick={badRating}>bad</button>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average { (good - bad) / (good + neutral + bad) }</p>
      <p>positive { good / (good + neutral + bad) * 100 }</p>
    </div>
  )
}

export default App