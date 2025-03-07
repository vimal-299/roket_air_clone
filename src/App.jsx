import { useState } from 'react'
import './App.css'
import Boxes from "./components/boxes.jsx"
import Page from "./components/page.jsx"
import Navbar from "./components/navbar.jsx"

function App() {

  return (
    <>
      <Navbar/>
      <Boxes/>
      <Page/>
    </>
  )
}

export default App
