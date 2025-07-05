<<<<<<< HEAD
import Page from "./(root)/page";
=======
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
>>>>>>> b56a0027fdee552404138a62fc13120c861f5098

const App = () => {
  return (
    <div>
<<<<<<< HEAD
      <Page />
=======
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
>>>>>>> b56a0027fdee552404138a62fc13120c861f5098
    </div>
  );
};

export default App;
