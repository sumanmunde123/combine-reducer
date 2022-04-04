import React from 'react';
import { useState } from 'react';
import "./login.css";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { adduser } from '../../Redux/Auth/action';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Login = () => {

    const checkAuth = useSelector(store=>store.auth.auth)

    const dispatch = useDispatch();

    const [user,setUser] = useState({});

    const handleChange = (e) =>{
        const {id,value} = e.target;
        setUser({
            ...user,
            [id] : value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`https://reqres.in/api/login`,user).then(({data})=>{
            console.log(checkAuth)
            dispatch(adduser(checkAuth));
            console.log("success");
           
        })
  
    }
    if(checkAuth){
       return <Navigate to="/"></Navigate>
    }  
  return (
    <div>
        <form className='loginForm' onSubmit={handleSubmit} >
            <input type="text" placeholder='Enter Email' id="email" onChange={handleChange}  required/>
            <input type="password" placeholder='Enter Password' id="password" onChange={handleChange} required/>
            <input type="submit" value="Login" />
        </form>
    </div>
  )
}

export default Login