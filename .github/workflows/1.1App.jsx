const Header4 = ({coursey}) => {
  console.log(coursey)
  return (
      <div>
          <p>
              {coursey}
          </p>
      </div>
  )
}




const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
      <Header4 coursey={part3} />
    
      // <Content ... />
      // <Total ... />
      
  )
}

export default App
