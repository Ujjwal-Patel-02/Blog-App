import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Login from './pages/Login'
import Register from './pages/Register'
import Header from './components/Header'
import FooterComponent from './components/Footer'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/Dashboard' element={<Dashboard/>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
    </Routes>
    <FooterComponent/>
    </BrowserRouter>
  )
}
