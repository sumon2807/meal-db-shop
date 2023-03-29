import React from 'react';

const SideCart = ({showName}) => {
    return (
        <div className='px-4'>
            <h1 className='font-bold'>Product Name</h1>
            <p>{showName}</p>
        </div>
    );
};

export default SideCart;