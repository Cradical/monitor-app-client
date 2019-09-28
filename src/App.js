import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import './App.css'
import NavBar from './components/NavBar'
import MenuBar from './components/MenuBard'
import MainDisplay from './components/MainDisplay'

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div className='main-container'>
          <MenuBar />
          <MainDisplay />
        </div>
      </div>
    </Router>
  )
}

export default App
