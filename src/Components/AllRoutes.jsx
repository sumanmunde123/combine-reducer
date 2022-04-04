import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login/Login'
import Navbar from './Navbar'
import Todos from './Todos'

const AllRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path = "/" element = {<Todos></Todos>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes