import React, { useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SideCart from './components/SideCart/SideCart';

const App = () => {
  const [showName, setShowName]=useState('');
  console.log(showName)

  const handleBuyNowButton=(name)=>{
    const previousMealName=localStorage.getItem('Meals Name')
    if(previousMealName){
      const newName=JSON.parse(previousMealName);
      newName.push(name)
      localStorage.setItem('Meals Name', JSON.stringify(newName));
      setShowName(newName);
    }
    else{
      localStorage.setItem('Meals Name', JSON.stringify([name]));
      setShowName([name]);
    }
  }
  return (
    <div>
      <Header></Header>
      <div className='main flex justify-between px-8 mt-8'>
        <div className="home-container">
        <Home handleBuyNowButton={handleBuyNowButton}></Home>
        </div>
        <div className="side-cart card w-96 bg-base-200 mx-4">
        <SideCart showName={showName}></SideCart>
        </div>
      </div>
    </div>
  );
};

export default App;