// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu from './MainMenu';
import PlayPage from './PlayPage'; // Create PlayPage component
import InstructionsPage from './InstructionsPage'; // Create InstructionsPage component
import AboutUsPage from './AboutUsPage'; // Create AboutUsPage component

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/play" element={<PlayPage />} />
          <Route path="/instructions" element={<InstructionsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
