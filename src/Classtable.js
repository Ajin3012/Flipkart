import { Component } from "react";

class Tableclass extends Component{
  render(){
    const {userData}= this.props;
    const data1=userData.map((e)=>{
      return(
        <tr>
          <td>{e.name}</td>
          <td>{e.age}</td>
          <td>{e.profession}</td>
        </tr>
      )
    })
    return(
      <div>
      <h1>Class component</h1>
      {this.props.children}{this.props.name}
      <table>
        <thead>
          <th>Name</th>
          <th>Age</th>
          <th>Profession</th>
        </thead>
        <tbody>
          {data1}
        </tbody>
      </table>
      </div>
    )
  }
}
export default Tableclass;