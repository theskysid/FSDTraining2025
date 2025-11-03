import React, {useState} from 'react'

function StateHandling() {
    const [count, setCount] = useState(20);

    function increaseValue(){
        setCount(count + 1);
    }
  return (
    <div>
      StateHandling
      <h2>Counter Value = {count}</h2>

      <button onClick={increaseValue}>Increment Value</button>
      <button onClick={()=>(setCount(count-1))}>Decrement Value</button>
    </div>
  )
}

export default StateHandling
