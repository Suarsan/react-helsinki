import Part from './Part'

const Content = ({ parts }) => {

    return (
        <div>
            {
                parts.map(p => <Part part={p.name} exercises={p.exercises} />)
            }
        </div>
    )
    
}

export default Content