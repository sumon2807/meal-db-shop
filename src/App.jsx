import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SideCart from './components/SideCart/SideCart';

const App = () => {
  return (
    <div>
      <Header></Header>
      <div className='main flex justify-between px-8'>
        <div className="home-container">
        <Home></Home>
        </div>
        <div className="side-cart card w-96 bg-base-200 shadow-xl">
        <SideCart></SideCart>
        </div>
      </div>
    </div>
  );
};

export default App;