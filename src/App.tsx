
import './App.css'



// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexPage from './components/pages/IndexPage/IndexPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<IndexPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


