import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './componets/home';
import Policy from './componets/policy';
import TermsCondition from './componets/terms-condition';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/terms-condition" element={<TermsCondition />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
