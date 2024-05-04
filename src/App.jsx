import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Navbar'
import HeroSection from './components/HeroSection'
import StatSection from './components/StatSection'

function App() {

  return (
    <>
      <div className='flex flex-col w-full justify-center items-center'>
        <NavBar/>
        <HeroSection/>
        <StatSection/>
      </div>
    </>
  )
}

export default App