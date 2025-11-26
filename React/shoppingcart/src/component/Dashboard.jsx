import React, { useEffect } from 'react'

function Dashboard() {
  
  const[counter,setCounter]=React.useState(10);
  const[pointer,setPointer]=React.useState(100);

  useEffect(() => {
    console.log(counter);
    console.log(pointer);
  });

  return (
    <div>
      <div>
        <h2>Counter={counter}</h2>
        <h2>Pointer={pointer}</h2>
      </div>

      <button onClick={()=>{setCounter(counter+1)}}>Counter</button>
      <button onClick={()=>{setPointer(pointer+1)}}>Pointer</button>
    </div>
  )
}

export default Dashboard