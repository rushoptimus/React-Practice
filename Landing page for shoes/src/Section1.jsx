import React from 'react'
import "./Nav.css"
function Section1() {
  return (
    <div className='container'>
        <div className='hero'>
            <div className='hero-content'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOU DESERVE THE BEST WE'LL ALSO PROVIDE YOU WITH THE BEST. </p>
            </div>
            <div className='butons'>
                <button>Shop Now</button>
                <button className='button-2'>Category</button>
            </div>
            <div className='last'>
                <p>Also Available On</p>
                <div className='icons'>
                <img src="/amazon.png" alt="aa" />
                <img src="/flipcart.png" alt="ff" />
                </div>
                
            </div>
      
    </div>
    <div className='hero-image'>
        <img src="/s.png" alt="shoes" />
    </div>
    </div>
  )
}

export default Section1
