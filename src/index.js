import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./utils/internationalisation"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Suspense fallback="loading">
        <App />  
    </React.Suspense>
   
);


