import React, { useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SideCart from './components/SideCart/SideCart';

const App = () => {
  const [showName, setShowName]=useState('');
  const handleBuyNowButton=(name)=>{
    const previousProductName=localStorage.getItem('Product Name')
    if(previousProductName){
      const newName=JSON.stringify(previousProductName);
      localStorage.setItem('Product Name', newName);
      setShowName(newName);
    }
    else{
      localStorage.setItem('Product Name', name);
      setShowName(name);
    }
  }
  return (
    <div>
      <Header></Header>
      <div className='main flex justify-between px-8'>
        <div className="home-container">
        <Home handleBuyNowButton={handleBuyNowButton}></Home>
        </div>
        <div className="side-cart card w-96 bg-base-200 shadow-xl">
        <SideCart showName={showName}></SideCart>
        </div>
      </div>
    </div>
  );
};

export default App;