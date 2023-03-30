import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const Home = ({handleBuyNowButton}) => {
    const [meals, setmeals]=useState([])

    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
        .then(res=>res.json())
        .then(data=>setmeals(data.meals))
    },[])

    return (
        <div>
            <div className="meal-container grid grid-cols-3 gap-4">
                {
                    meals.map(meal=><SingleCard
                        key={meal.idMeal}
                        handleBuyNowButton={handleBuyNowButton} 
                        meal={meal}
                        ></SingleCard>)
                }
            </div>
        </div>
    );
};

export default Home;