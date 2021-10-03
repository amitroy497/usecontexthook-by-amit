import React, { createContext } from 'react'
import './App.css'
import ComA from './components/ComA'

export const BioData = createContext()

const App = () => {
  return (
    <div className='App'>
      <BioData.Provider value={'Amit Roy'}>
        <ComA />
      </BioData.Provider>
    </div>
  )
}

export default App
