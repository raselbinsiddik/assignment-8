import React, { useEffect, useState } from 'react';
import Bookmark from '../Bookmark/Bookmark';
import Cart from '../Cart/Cart';
import Carts from '../Carts/Carts';
import Mark from '../Mark/Mark';

const Data = () => {
    const [loadData, setLoadData] = useState([]);
    const [carts, setCarts] = useState([]);
    const [marks, setMarks] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setLoadData(data));
    }, [])

    const handleBookmark = (displayData) => {
        const newData = [...carts, displayData];
        setCarts(newData);
        // console.log(newData);
        
    }

    const handleMarks = (displayData) => {
        const newMark = [...marks, displayData];
        setMarks(newMark);
    }
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 ms-20 mr-20 mt-10'>
            <div className='col-span-2'>
                {
                    loadData.map(displayData => <Cart displayData={displayData} key={displayData.id} handleBookmark={handleBookmark}
                    handleMarks={handleMarks}></Cart>)
                }
            </div>
            <div className='mt-5'>
                <div className=' '>
                    <h3 className='text-2xl bold text-blue-600  bg-slate-300 p-4 rounded-xl'>
                       <Mark marks={marks}></Mark>
                    </h3>
                </div>
                <div className='bold bg-slate-200 m-2 rounded-xl'>
                    <div className='p-5 text-3xl bold bg-slate-200 rounded-xl'>
                        <Carts carts={carts}> 
                        </Carts>  
                    </div>
                    <div className='p-5 text-xl bold bg-slate-200 rounded-xl'>
                        {
                            carts.map(mark => <Bookmark key={mark.id} mark={mark}></Bookmark>)
                        }
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Data;