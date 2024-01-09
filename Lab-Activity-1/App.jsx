//Mercado, Karl Matthew H. WD - 401
import { useState } from 'react'
import './App.css'
import Hello from './components/Hello'
import Welcome from './components/welcome'
import ParentComponent from './components/ParentComponent'
import ChildComponent from './components/ChildComponent'

function App() {
  return (
    <>
      <div>
        <Hello />
        <Welcome />
        <ParentComponent />
        <ChildComponent />
      </div>
    </>
  )
}
export default App
