import React from 'react'
import Front from './Front'
import Secound from './Secound'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
 
      {/* <Secound /> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Front />}/>
        <Route path="Secound" element={<Secound />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
