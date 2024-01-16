//Mercado, Karl Matthew H. WD - 401
import { useState } from 'react'
import './App.css'
import Hello from './components/Hello'
import Welcome from './components/welcome'
import ParentComponent from './components/ParentComponent'
import ChildComponent from './components/ChildComponent'
import ConditionalDemo1 from './components/Conditional-Demo-1'
import ConditionalDemo2 from './components/Conditional-Demo-2'
import ConditionalDemo3 from './components/Conditional-Demo-3'
import ConditionalDemo4 from './components/Conditional-Demo-4'
import ToDolist from './components/ToDoList'
import MovieList from './components/MovieList'

function App() {
  return (
    <>
      <div>
        <Hello />
        <Welcome />
        <ParentComponent />
        <ChildComponent />
        <ConditionalDemo1 />
        <ConditionalDemo2 />
        <ConditionalDemo3 />
        <ConditionalDemo4 />
        <ToDolist />
        <MovieList />
      </div>
    </>
  )
}
export default App
