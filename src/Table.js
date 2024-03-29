const Table=(props)=>{
  const {userData}=props
  const storeData=userData.map((e)=>{
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
    <h2>Function Table</h2>
    <table>
      <thead>
        <th>Name</th>
        <th>Age</th>
        <th>Profession</th>
      </thead>
      <tbody>
        {storeData}
      </tbody>
    </table>
    </div>
  )
}
export default Table;