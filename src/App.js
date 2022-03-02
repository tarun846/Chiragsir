import React from 'react'
import Counter from './Component/Counter/Counter'
import './App.css'
import Book from './Component/Api_project/Book'
function App() {
  return (
    <>
     <div className = 'app' >
       <Counter/>
     </div>
      <Book/>
    </>
  )
}

export default App

