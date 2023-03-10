import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Contents/Home'
import Deals from './components/Contents/Deals';
import Goto from './components/Contents/Goto';
import SignUp from './components/Contents/SignUp';
import Todo from './components/Contents/Todo';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/deals" element={<Deals />} />
          <Route exact path="/goto" element={<Goto />} />
          <Route exact path="/todo" element={<Todo />} />
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
