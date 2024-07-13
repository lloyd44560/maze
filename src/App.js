import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TitleScreen from './components/TitleScreen';
import MazeGame from './components/MazeGame';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('title');
  const [currentLevel, setCurrentLevel] = useState(1);

  const handleStartGame = () => {
    setCurrentPage('game');
  };

  const handleInstructions = () => {
    setCurrentPage('instructions');
  };

  const handleAboutUs = () => {
    setCurrentPage('aboutUs');
  };

  const handleLevelComplete = () => {
    if (currentLevel < 3) {
      setCurrentLevel((prev) => prev + 1);
    } else {
      // All levels complete, redirect to the title screen
      setCurrentLevel(1);
      setCurrentPage('title');
    }
  };

  const renderPage = () => {
    if (currentPage === 'title') {
      return (
        <TitleScreen
          onStartGame={handleStartGame}
          onInstructions={handleInstructions}
          onAboutUs={handleAboutUs}
        />
      );
    } else if (currentPage === 'instructions') {
      return (
        <div className="instructionsContainer">
          <h2>Instructions</h2>
          <p>Welcome to the Zombie Maze Game!</p>
          <p>PC/laptop users can use the arrow keys to move around.</p>
          <p>Mobile users can use the mobile floating control buttons on the screen.</p>
          <p>Evade zombies, reach the exit, and survive! Good luck!</p>
          <button onClick={() => setCurrentPage('title')}>Back to Title</button>
        </div>
      );
    } else if (currentPage === 'aboutUs') {
      return (
        <div className="aboutUsContainer">
          <h2>About Us</h2>
          <p>Your about us content goes here.</p>
          <button onClick={() => setCurrentPage('title')}>Back to Title</button>
        </div>
      );
    } else if (currentPage === 'game') {
      return <MazeGame onLevelComplete={handleLevelComplete} />;
    }
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={renderPage()} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
