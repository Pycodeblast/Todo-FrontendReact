import { useState } from 'react'
import Todoform from './component/form'
import {GetTodo} from './component/todo'
import './App.css';

function App() {
  const[rdata,setretrieveData]=useState(false);
  const[stodo,settodolist]=useState(null);

  const edittodo=(item)=>{
    console.log("settodolist",item);
    settodolist(item);
  }

  const gettodo=()=>{
    console.log("getData");
    setretrieveData(rdata ? false:true);
    settodolist(null);
  }

  return (
    <>
    <Todoform  todoitem={stodo} getdata={gettodo}     />
    <GetTodo   Rdata={rdata}   etodo={edittodo} />
    </>
  );
}

export default App;
