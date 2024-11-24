import React from 'react'
import "./App.css"
import { Link } from "react-router-dom";
function Front() {
  return (
    <div className='all'>
      
      <div className='dimage'>
        <img src="/dices.png" alt="dice-png" />
      </div>

      <div className='dtext'>
        <h1>DICE GAME</h1>
        <Link to="/Secound"> <button>Play Now</button></Link>;
      </div>

    </div>
  )
}

export default Front
