import React from 'react';
import { addTodos } from '../Redux/Todos/action';
import { useDispatch ,useSelector} from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import "./Todos.css";
import { Navigate } from 'react-router-dom';

const Todos = () => {

    const checkAuth = useSelector((store) => store.auth.auth);

    if(!checkAuth){
       return <Navigate to="/login"></Navigate>
    }

    const [todos ,setTodos] = useState("");

    const allTodos = useSelector((store) => store.todos.todos);

    const dispathch = useDispatch();

    const handleChange = (e) =>{
        const {value} = e.target;
        setTodos(value);
        
    }
    const addTODO = () =>{

        if(todos === "") return alert("Please Enter a valid todo ");

        axios.post("http://localhost:8080/todos",{
            title : todos,
            status : false
        }).then(()=>{
            getAllTodos();
        })
        
    }

    const addTODOByEnter = (e) =>{ 

        if(e.key==="Enter"){
            if(todos === "") return alert("Please Enter a valid todo ");
            axios.post("http://localhost:8080/todos",{
            title : todos,
            status : false
        }).then(()=>{
            getAllTodos();
        })
        }
    }

    const getAllTodos = () => {
        axios.get("http://localhost:8080/todos").then(({data})=>{
            dispathch(addTodos(data));
        });
        
    }
    useEffect(()=>{
        getAllTodos();
    },[]);

    const handleStatus = ({id,status}) =>{

        axios.patch(`http://localhost:8080/todos/${id}`,{
            status: (!status)
        }).then(()=>{
            getAllTodos();
        })
    }

    const handleDelete = ({id}) =>{
        axios.delete(`http://localhost:8080/todos/${id}`).then(()=>{
            getAllTodos();
        })
    }

  return (
    <div>
        <div className='todoInput'>
        <input type="text" onChange={handleChange} onKeyPress={addTODOByEnter} placeholder="Enter Todo" id="todo"/>
        <input type="submit" value="ADD" onClick={addTODO} />
        </div>
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Todo</th>
                        <th>Status</th>
                        <th>Toggle</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>

                {allTodos.map((ele)=>{
                     return   (
                                <tr key={ele.id}>
                                    <td>{ele.id}</td>
                                    <td>{ele.title}</td>
                                    <td style={{backgroundColor: ele.status?"green":"red" , color:"white"}}>{ele.status ? "Done":"Not done"}</td>
                                    <td><button onClick={()=>{
                                        handleStatus(ele)
                                    }}>{ele.status?"Not Done":"Done"}</button></td> 
                                    <td><button onClick={()=>{
                                        handleDelete(ele)
                                        }
                                        }>Delete</button></td>
                                </tr>
                            )
                    })}

                </tbody>
            </table>
        </div>
        
    </div>
  )
}

export default Todos;