import React from 'react'
import Home from './Home'
import HomeWithUrlUpdate from './HomeWithUrlUpdate'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<HomeWithUrlUpdate />} /> */}
      </Routes>
    </Router>
  )
}

export default App