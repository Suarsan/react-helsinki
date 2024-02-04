import { useState } from 'react'
import Statistics from './Statistics'

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
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App