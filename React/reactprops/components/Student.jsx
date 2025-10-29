import React from 'react'
import './Student.css'

function Student(props) {
  return (
    <div className='container'>
       <h1>Student Info</h1>
       <h2>Name: {props.name}</h2>
       <h2>Roll No: {props.roll}</h2>
       <h2>Branch: {props.branch}</h2>
       <h2>Section: {props.section}</h2>
       <h2>College: {props.college}</h2>
    </div>
  )
}

export default Student
