import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./home";
import NotFound from './pages/NotFound';
import SearchCard from './pages/SearchCard';
import DetailPage from './pages/DetailPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/search' element={<SearchCard/>} />
        <Route path='/detail/:id' element={<DetailPage/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
