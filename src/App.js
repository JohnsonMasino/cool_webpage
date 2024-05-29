import React from 'react';
import './styles.css';

function App() {
  return (
    <div>
      <header>
        <h1>Welcome to Cool Webpage</h1>
      </header>
      <div className="container">
        <h2>About This Page</h2>
        <p>
          This is a simple example of a React.js project with a separate CSS file for styling.
          The goal is to demonstrate a clean and modern design using basic CSS properties.
        </p>
        <button onClick={() => alert('Button clicked!')}>Click Me</button>
      </div>
    </div>
  );
}

export default App;