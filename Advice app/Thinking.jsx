
import React,{useState,useEffect} from 'react'
import "./Thinking.css";

const Thinking = () => {

  const[advice,setAdvice]=useState("Please click the button to get Advice");
  const[count,setCount]=useState(0);


  async function generate(){
      const value=await fetch("https://api.adviceslip.com/advice");
      const data=await value.json();
      setAdvice(data.slip.advice)
      setCount((c)=>c+1);
  }

  useEffect(function(){
    generate();

    return()=>{
      setAdvice("Please click the button to get Advice");
      console.log("Memory Cleaned");
      
    }
  },[])
  
  return (
    <>
    <h1>Advice app</h1>
    <div>
      <h3>{advice}</h3>
       <button onClick={generate}>Get Advice</button>
       <p>You Searched for <b>{count}</b> count of Advices</p>
    </div>
    </>
  )
}

export default Thinking
