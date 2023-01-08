import React from 'React'

const Home = () => {
  return (
    <div><button onClick={() => setState(state+5)}>Click me {state}</button>
    {
      data.map((element, index )=>{
        return (
          <div key={index}>
            <h4>{element.firstName}</h4>
            <h4>{element.lastName}</h4>
            <h4>{element.email}</h4>
          </div>

        )
      })
    }</div>
  )
}

export default Home