import './App.css'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './component/Login'
import Registration from './component/Registration'
import Dashboard from './component/Dashboard'
import MainLayout from './component/MainLayout'
function App() {
  
  const[logData,setLogData]=useState();

  return (
    <>
      {/* <h2>Welcome online Shopping</h2> */}

      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registration regData={setLogData}/>} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/mainlayout' element={<MainLayout/>} />
      </Routes>
      </BrowserRouter>
      <h2>{
        JSON.stringify(logData)  
      }
      </h2>
    </>
  )
}

export default App
