import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes
} from "react-router-dom";
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <div className="page-content">
      <div className="wrapper">
        <Routes>
          <Route path='/' element={<MainPage/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
