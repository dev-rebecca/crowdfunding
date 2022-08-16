import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/index.jsx'
import HomePage from './pages/HomePage.jsx';
import ProjectPage from './pages/ProjectPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route  path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;