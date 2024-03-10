import { useState } from "react";
import Heading from "./components/heading";
import Input from "./components/input-row";
import Row1 from "./components/row1";
import DisplayMsg from "./components/emptyMsg";

function App() {
  let Tasks = [
    {
      name: "Breakfast",
      date: "10-2-2004",
    }
   
  ];
let [initialTasks,setTask]=useState(Tasks);

const setChange=(itemName,itemDate)=>{
 let newTask=[...initialTasks,{name:itemName,date:itemDate}];
  setTask(newTask);
 
}

const OnDelete=(index)=>{

  const newTasks=initialTasks.filter((task,i)=>i !== index  );
  
  setTask(newTasks);


}
  return (
    <>
      <center>
        <Heading />
        <hr />
        <Input handleChange={setChange} />
        <hr />
        {initialTasks.length ===0 &&
         <DisplayMsg></DisplayMsg>
        } 
   
        <Row1 Tasks={initialTasks} toDelete={OnDelete} ></Row1>
      </center>
    </>
  );
}

export default App;
