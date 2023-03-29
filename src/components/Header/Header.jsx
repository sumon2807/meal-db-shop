import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-between bg-neutral px-8 h-12 items-center'>
            <h1 className='text-primary font-bold text-2xl'>Meal<span className='text-accent'>Db</span></h1>
            <div className='text-base-100'>
                <a className='mr-8' href="/Order">Order</a>
                <a className='mr-8' href="/Order Review">Order Review</a>
                <a className='mr-8' href="/Manage Inventory">Manage Inventory</a>
                <a href="/Login">Login</a>
            </div>
        </div>
    );
};

export default Header;