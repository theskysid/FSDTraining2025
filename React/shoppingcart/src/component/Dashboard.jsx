import React, { useEffect } from 'react'

function Dashboard() {
  const[data,setData]=React.useState([]);

  useEffect(() => {
     async function fetchData(){
      const serverResponse =await fetch(`https://fakestoreapi.com/products`);
      const jsonData=await serverResponse.json();
      setData(jsonData);
      console.log('Products Data:', jsonData);
    }
    fetchData();
  },[]);

  return (
    <div>
      {
        JSON.stringify(data)
      }
    </div>
  )
}

export default Dashboard