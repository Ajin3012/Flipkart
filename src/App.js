
import "./App.css";
import List from "./list";
import Test from "./Test";
import Welcome from "./Welcome";
import Table from "./Table";
import Classtable from './Classtable';
import Count from "./Count";
import Use from "./Use";
import Sign from "./Sign";
function App() {
  const userDetail=[
    {
    name:"Ajin",
    age:26,
    profession:"Developer",
  },
  {
    name:"Alen",
    age:25,
    profession:"Tester",
  },
  {
    name:"Akish",
    age:24,
    profession:"Quality",
  },
  {
    name:"Arun",
    age:27,
    profession:"Designer",
  }
]
  const Cars = [
    {
      cname: "Ferrari",
    },
    {
      cname: "Audi",
    },
    {
      cname: "Benz",
    },
    {
      cname: "BMW",
    },
  ];
  return (
    <div className="App">
      <List carsName={Cars} />
      <Welcome name="Ajin" age="26"/>
      <Table userData={userDetail}/>
      <Classtable name="Beniston" userData={userDetail}>
        <p>Iam a new Person</p>
      </Classtable>
      <Test/>
      <Count/> 
      <Use/>
      <Sign/>
    </div>
  );
}
    

export default App;
