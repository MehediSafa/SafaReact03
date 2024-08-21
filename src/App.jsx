import { useState } from 'react'

import './App.css'
import Home from './pages/Home'
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route}  from 'react-router-dom'
import About from './pages/About'
import Layout from './components/root/Layout'
import Service from './pages/Service'
function App() {
  let router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home/>}></Route>
      <Route path = 'about' element = {<About/>}></Route>
      <Route path = 'service' element = {<Service/>}></Route>
    </Route>
  ))


  return (
    <>
    <RouterProvider router={router}/>
    
    </>
    
  )
}

export default App
