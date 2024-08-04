import axios from "axios"
import { useEffect,useState } from "react"

export const GetTodo=(props)=>{
    const [data,setData]=useState([]);

    const getdata=()=>{
        axios.get("http://localhost:5000/todos/").then((res)=>{
            setData(res.data);
            console.log(res.data);
            
        })
    }

    useEffect(()=>{
        console.log("get data",props.Rdata);
        getdata();
    },[props])

    const editchange=(item)=>{
        props.etodo(item);
    }
    const deletechange =(item)=>{
        axios.delete(`http://localhost:5000/todos/${item._id}`).then((res)=>{
            console.log(res.data);
            getdata();
        })
    }
   
    return(
        <div className="listitem">
            <ul>
                {data.map((item,index)=>(
                    <li key={item._id}>{item.title}:{item.description}
                    <button id="btne" onClick={()=>{editchange(item)}}>Edit</button>
                    <button id="btnd" onClick={()=>{deletechange(item)}}>Delete</button>
                    </li>
                )
                )
                }
            </ul>
        </div>
    )
}