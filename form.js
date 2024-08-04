import axios from "axios"
import { useEffect,useState } from "react"

const Todoform=(props)=>{
    const[tit,setTitle]=useState('');
    const[desc,setDescription]=useState('');

    const handlesave=()=>{
        const data={title:tit,description:desc};
        console.log("data recieved",data);
        if(props.todoitem){
            axios.put(`http://localhost:5000/todos/${props.todoitem._id}`,data).then((res)=>{
                console.log(res.data);
                props.getdata();
                setTitle("");
                setDescription("");
            }
        )
        }else{
            axios.post("http://localhost:5000/todos/",data).then((res)=>{
                console.log(res.data);
                props.getdata();
                setTitle("");
                setDescription("");
            }
        )
        }
    }

    useEffect(()=>{
        if(props.todoitem){
            setTitle(props.todoitem.title);
            setDescription(props.todoitem.description);
            console.log(props.todoitem.title);
        }
    },[props])

    const changetit=(e)=>{
        setTitle(e.target.value);
    }
    const changedisc=(e)=>{
        setDescription(e.target.value);
    }
    return(
        <div className="form">
            <h1>Todo Application</h1>
            <br/>
            <label >Title:</label><br/>
            <input type="text" id="title" onChange={changetit} value={tit}/>
            <br/><br/>
            <label >Description:</label><br/>
            <textarea name="" type="text" id="description" onChange={changedisc} value={desc}></textarea>
            <br/>
            <button  onClick={handlesave} id="btn" >{props.todoitem ? 'update':'save'}</button>
        </div>
    );
}
export default Todoform;