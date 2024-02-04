const Statistics = ({ good, neutral, bad }) => {

    return (
        <>
            <h2>statistics</h2>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {good + neutral + bad}</p>
            <p>average { (good - bad) / (good + neutral + bad) }</p>
            <p>positive { good / (good + neutral + bad) * 100 }</p>
        </>
    )
}

export default Statistics