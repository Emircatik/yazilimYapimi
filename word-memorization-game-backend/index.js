import React from 'react'; 
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
cd /path/to/your/react-project
git init node_modules build.env
git add .
git commit -m "Initial Sommit With React Application Setup"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
