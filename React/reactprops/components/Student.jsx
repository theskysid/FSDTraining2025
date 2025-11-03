import React from 'react'
import './Student.css'

function Student({data}) {
  return (
    <div className='container'>
       <h1>Student Info</h1>
       <img src={data.pic} alt="profile page" height={200} width={200} />
       <h2>Name: {data.name}</h2>
       <h2>Roll No: {data.roll}</h2>
       <h2>Branch: {data.branch}</h2>
       <h2>Section: {data.section}</h2>
       <h2>College: {data.college}</h2>
    </div>
  )
}

export default Student
