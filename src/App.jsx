import React from "react"
import DetailedView from "./pages/DetailedView"
import { Route, Routes } from "react-router-dom"


function App() {

  return (
    <>
   <h1>Welcome</h1>
   <Routes>
   <Route path='/detailedview' element={<DetailedView/>}/>
   </Routes>
    
    </>
  )
}

export default App
