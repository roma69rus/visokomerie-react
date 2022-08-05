import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './components/AppRouter'
import { Header } from './components/UI/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import './css/media-1024.css'
import './css/media-768.css'
import './css/media-320.css'
import './css/normalize.css'
import 'semantic-ui-css/semantic.min.css'




function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App; 