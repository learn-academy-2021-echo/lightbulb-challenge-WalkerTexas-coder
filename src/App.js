import React, { Component } from 'react'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      currentCohort : "Echo"
    }
  }
  render(){
    return(
      <>
        <h1>Hello World!</h1>
        <div> A qucik example of the PR cycle </div>
      </>
    )
  }
}
export default App
