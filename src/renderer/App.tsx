import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Virtual Page Viewer</h1>
      </header>
      <main className="app-content">
        <div className="welcome-container">
          <h2>Welcome to Virtual Page Viewer</h2>
          <p>A tool for visualizing and debugging VirtualPage pools</p>
          <div className="placeholder-tabs">
            <div className="placeholder-tab active">Program Pool</div>
            <div className="placeholder-tab">Data Pool</div>
            <div className="placeholder-tab">Journal Pool</div>
            <div className="placeholder-tab">Metadata Pool</div>
          </div>
          <div className="placeholder-content">
            <p>Pool visualization will appear here</p>
          </div>
        </div>
      </main>
      <footer className="app-footer">
        <p>Virtual Page Viewer v0.1.0</p>
      </footer>
    </div>
  );
};

export default App;
