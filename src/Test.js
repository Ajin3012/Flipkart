import { Component } from 'react'
// import './Test.css'

class state extends Component{
  constructor(){
    super()
    this.state={
      name:"Ajin"
    }
  }
  changeName(){
    this.setState(
    {
      name:"My name is Ajin M B"
        }
    )
  }
  render(){
    return(
      <div>
        <h1>Change Name</h1>
        <h2>{this.state.name}</h2>
        <button onClick={()=>{this.changeName()}}>change</button>
      </div>
    )
  }
}
export default state