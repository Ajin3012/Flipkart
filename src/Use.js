import { useState } from "react"

function Use(){
  const [app,setapp]=useState(0);
  function add(){
    setapp(app+1)
  }
  function sub(){
    setapp(app>0?app-1:0)
  }
  return(
    <div>
      <p>{app}</p>
      <button onClick={(add)}>Increase</button>
      <button onClick={(sub)}>Decrese</button>
    </div>
  )
}

export default Use
