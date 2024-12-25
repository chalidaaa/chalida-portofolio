// src/index.js (atau jika Anda menempatkannya di dalam app/)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../app/page';  // Menyesuaikan path ke App.jsx di dalam folder app/
import './index.css'; // Atur gaya CSS jika ada

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
