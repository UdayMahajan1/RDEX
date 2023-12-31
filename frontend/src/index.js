import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NotFound from './components/NotFound';
import reportWebVitals from './reportWebVitals';
import { RefsProvider } from './contexts/RefsContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Subscribed from './components/Subscribed';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path="*" element={
            <NotFound />
          } />
          <Route path="/" element={
            <RefsProvider>
              <App />
            </RefsProvider>
          } />
          <Route path="/subscribed" element={
            <Subscribed />
          } />
        </Routes>
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
