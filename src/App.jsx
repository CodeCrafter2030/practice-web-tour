import { useState } from 'react'
import './App.css'
import { createHashRouter, Link } from 'react-router-dom';
import { createHashRouter,RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar'
import About from './components/About';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Footer from './components/Footer';


function App() {
  const router = createHashRouter([
  {
    path: "/",
    element:
    <>
      <Navbar />
      <Hero/>
      <Cards/>
      <Footer/>
    </>,
  },
  {
    path: "/nav",
    element: <Navbar />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
