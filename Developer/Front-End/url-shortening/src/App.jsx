import { useState } from 'react'
import './App.css'
import Header from './assets/Header'
import HeroSection from './assets/HeroSection'
import InputShort from './assets/InputShort'
import AdvancedStats from './assets/AdvancedStats'

function App() {


  return (
    <>
        <main>
          <Header />
          <div className=''>
            <HeroSection />
            <InputShort className="absolute" />
            <AdvancedStats />
          </div>
        </main>
    </>
  )
}

export default App
