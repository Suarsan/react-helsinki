import StatisticLine from './StatisticLine'

const Statistics = ({ good, neutral, bad }) => {

    if (good !==0 || neutral !== 0 || bad !== 0) {
        return (
            <>
                <h2>statistics</h2>
                <table>
                    <tbody>
                        <StatisticLine text='good' value={good} />
                        <StatisticLine text='neutral' value={neutral} />
                        <StatisticLine text='bad' value={bad} />
                        <StatisticLine text='all' value={good + neutral + bad} />
                        <StatisticLine text='average' value={(good - bad) / (good + neutral + bad)} />
                        <StatisticLine text='positive' value={good / (good + neutral + bad) * 100} />
                    </tbody>
                </table>
            </>
        )
    } else {
        return (
            <>
                <h2>statistics</h2>
                <p>No feedback given</p>
            </>
        )
    }

}

export default Statistics