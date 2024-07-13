import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
      setCurrentLevel(1);
      setCurrentPage('title');
    }
  };

  return (
    <Router>
      <div className="app-container">
        {currentPage === 'title' && (
          <TitleScreen
            onStartGame={handleStartGame}
            onInstructions={handleInstructions}
            onAboutUs={handleAboutUs}
          />
        )}
        {currentPage === 'instructions' && <InstructionsPage />}
        {currentPage === 'aboutUs' && <AboutUsPage />}
        {currentPage === 'game' && <MazeGame onLevelComplete={handleLevelComplete} />}
      </div>
    </Router>
  );
};

const InstructionsPage = () => {
  return (
    <div className="instructions-container">
      <h2 className="title">Instructions</h2>
      <p className="instruction-text">Welcome to the Zombie Maze Game!</p>
      <p className="instruction-text">
        PC/laptop users can use the arrow keys to move around.
      </p>
      <p className="instruction-text">
        Mobile users can use the mobile floating control buttons on the screen.
      </p>
      <p className="instruction-text">
        Evade zombies, reach the exit, and survive! Good luck!
      </p>
      <button className="back-button" onClick={() => window.history.back()}>
        Back
      </button>
    </div>
  );
};

const AboutUsPage = () => {
  return (
    <div className="aboutUs-container">
      <h2 className="title">About Us</h2>
      <p className="instruction-text">Information about the creators.</p>
      <button className="back-button" onClick={() => window.history.back()}>
        Back
      </button>
    </div>
  );
};

export default App;
