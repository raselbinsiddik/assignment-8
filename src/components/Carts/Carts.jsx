import React from 'react';

const Carts = ({ carts }) => {
    
    let quantity = 0;
   
    for (const displayData of carts) {
        quantity = quantity + displayData. quantity;
        
    }

    return (
        <div>
            <p className='p-5 text-2xl bold bg-slate-200 rounded-xl m-1'>Bookmarked Blogs:{quantity}</p>
    
        </div>
    );
};

export default Carts;