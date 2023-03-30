import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faStar} from '@fortawesome/free-solid-svg-icons'

const SingleCard = ({meal, handleBuyNowButton}) => {
    const {strMeal, strCategory, strMealThumb, strArea}=meal
    return (
        <div className=''>
                <div className="card w-full bg-base-100 shadow-2xl">
                    <figure><img className='w-96 h-64' src={strMealThumb} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{strMeal}</h2>
                    <p>Area: {strArea}</p>
                    <p>Category: {strCategory}</p>
                <div className='mb-4'>
                    <p className='font-semibold'>Rating:
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </p>
                </div>
                <div className="card-actions justify-center">
                <button onClick={()=>handleBuyNowButton(name)} className="btn btn-primary w-full">Buy Now<FontAwesomeIcon icon={faShoppingCart} /></button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SingleCard;