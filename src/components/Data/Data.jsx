import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

const Data = () => {
    const [loadData, setLoadData] = useState([]);
    const [carts, setCarts] = useEffect([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setLoadData(data));
    }, [])

    const handleBookmark = () => {
        console.log(setLoadData);
    }
    
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 ms-20 mr-20 mt-10'>
            <div className='col-span-2'>
                {
                    loadData.map(displayData => <Cart displayData={displayData} key={displayData.id}></Cart>)
                }
            </div>
            <div className='mt-7 '>
                <div className='m-2 '>
                    <h3 className='text-3xl bold text-blue-600 bg-red-100 p-5 rounded-xl'>Spent time on read:</h3>
                </div>
                <div className='bold bg-slate-200 m-2'>
                    <h2 className='p-5 text-3xl bold bg-slate-100 rounded-xl'>Bookmarked Blogs:</h2>
                </div>
            </div>
        </div>
    );
};

export default Data;