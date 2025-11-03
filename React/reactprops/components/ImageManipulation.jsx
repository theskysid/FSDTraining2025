import React, { useState } from 'react'
import cat from './cat.png'

const ImageManipulation = () => {

    const[catHeight, setCatHeight]=React.useState(200);
  return (
    <div style={{margin:'0px auto', border:'2px solid red', height:'500px', width:'400px', paddingLeft:'100px', paddingTop:'50px', marginTop:'20px'}}>
      Image Manipulation Component 
      <div>
        <img src={cat} alt="cat image" height={catHeight} width={200} />
      </div>
      <div>
      <button onClick={()=>(setCatHeight(catHeight+20))}>Increase Height</button>
      </div>
    </div>
  )
}

export default ImageManipulation
