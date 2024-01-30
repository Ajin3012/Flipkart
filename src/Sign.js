import { useEffect, useState } from "react";

function Sign(){
 const[sign,setsignoff]=useState(false);
//  const[word,setword]=useState("Please signin")
 function getin(){
  setsignoff(sign?false:true)
  // setword(sign?"You are Welcome":"Please signin") 
 }

  const [name,setname]=useState('hi')

const changeName=()=>{
  setname('hello')
}
useEffect(()=>{
  console.log(name)
  console.log('update')
})
  return(
    <div>
      <button onClick={getin}>{sign?"signout":"signin"}</button>
      <p>{sign?"You are welcome":"Please signin"}</p>
      <h2>{name}</h2>
      <button onClick={()=>changeName()}>change</button>
    </div>
  )
}
export default Sign