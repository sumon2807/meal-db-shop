import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const Home = ({handleBuyNowButton}) => {
    const [products, setProducts]=useState([])

    useEffect(()=>{
        fetch(`products.json`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div>
            <div className="product-container grid grid-cols-3 gap-4">
                {
                    products.map(product=><SingleCard handleBuyNowButton={handleBuyNowButton} product={product}></SingleCard>)
                }
            </div>
        </div>
    );
};

export default Home;