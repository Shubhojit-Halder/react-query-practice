import axios from "axios";
import { useEffect, useState } from "react"

const SuperHeroes = () => {
  const [isLoading,setIsLoading]=useState(true);
  const [data,setData]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:4000/superheroes").then((res)=>{
      setData(res.data);
      setIsLoading(false);
    })
  },[])
  if(isLoading)
  {
    return <>Loading...</>
  }
  return (
    <>
    <div>SuperHeroes</div>
    {
      data.map((hero,key)=>{
        return(
         <div key={key}>{hero.name}</div>
        )
      })
    }
    </>
  )
}

export default SuperHeroes