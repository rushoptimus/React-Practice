import React, { useState } from 'react'
import styled from 'styled-components'
import Rules from "./Rules";
function Rolldice( {random ,GetNumber,Setscore,showrules,SetShowrules}) {
const reset = () =>{
  Setscore(0)
}

  return (
    <Dice >
      <div onClick={GetNumber}>
      <img src={`/dice_${random}.png`} alt={`dice-${random}`} />
      </div>

      <p >Click on Dice to roll</p>
      
      <Buton>
        <button className="white" onClick={reset}>Reset Score</button>
        <button className="black " onClick={() => SetShowrules((prev)=> !prev)}>{showrules ? "Hide" :"Show"} Rules</button>
      </Buton>
     {showrules && < Rules />}
    </Dice>
  )
}

export default Rolldice
const Dice = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    align-items: center;
    justify-content: center;
    gap: 15px;  
    cursor: pointer;
    
p{
font-size: 24px;
font-weight: 500;
}
`
const Buton = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 24px;

button{

padding: 10px 18px;
border-radius: 5px;
min-width: 220px;
height: 44px;
cursor:pointer;
transition: 0.5s background ease-in;
font-size: 16px;
font-weight: 600;
} 
.white{
border: 1px solid black;
color: black;
background-color: white;
}
.black{
  border: 1px solid transparent;
color: white;
background-color: black;
}
.white:hover{
  background-color:black;
    color:  white;
    border: 1px solid white;
    cursor: pointer;
    transition: 0.3s background ease-in;
}
.black:hover{
  background-color: white;
    color: black;
    border: 1px solid black;
    cursor: pointer;
    transition: 0.3s background ease-in;
}
`