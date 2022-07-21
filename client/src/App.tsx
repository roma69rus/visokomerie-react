import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './components/AppRouter'
import { NavBar } from './components/UI/navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
