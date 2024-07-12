import React from "react"
import DetailedView from "./pages/DetailedView"
import { Route, Routes } from "react-router-dom"
import Footer from './components/Footer'
import Home from "./pages/Home"
import Header from "./components/Header"


function App() {

  return (
    <>

      <h1>Welcome</h1>
      <Routes>
        <Route path='/detailedview' element={<DetailedView />} />
      </Routes>


   <Header/>
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path='/detailedview' element={<DetailedView/>}/>
   </Routes>
   <Footer/>
    </>
  )
}

export default App
