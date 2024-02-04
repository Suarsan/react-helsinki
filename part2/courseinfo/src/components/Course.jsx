import Header from './Header'
import Content from './Content'

const Course = ({ course }) => {

  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <p>total of { course.parts.reduce((acc, part) =>  acc += part.exercises, 0)} exercises</p>
    </>
  )
}

export default Course