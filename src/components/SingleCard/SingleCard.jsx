import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faStar} from '@fortawesome/free-solid-svg-icons'

const SingleCard = ({product, handleBuyNowButton}) => {
    const {id, name, price, img, seller, ratings}=product
    return (
        <div className=''>
            <div className="card w-full bg-base-100 shadow-2xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>Brand: {seller}</p>
                <div className='flex justify-between mb-4'>
                    <div>
                        <p className='font-semibold'>Price: {price}</p>
                    </div>
                    <div>
                        <p className='font-semibold'>Rating:
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        </p>
                    </div>
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