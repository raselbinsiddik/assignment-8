import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook} from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const { id, imageUrl, name, personImg, publishDate, time, title, marks } = props.displayData;
    const handleBookmark = props.handleBookmark;
    const handleMarks = props.handleMarks;
    return (
            <div className='m-5'>
            <div className='border rounded'>
                <img className='urlImage min-w-full min-h-full rounded' src={imageUrl} alt="" />
                <div className='mt-5 flex justify-between'>
                    <div className='flex'>
                        <div>
                            <img className='w-10 rounded-full' src={personImg} alt="" />
                        </div>
                        <div className='ms-5'>
                            <span className='text-xl font-semibold'>
                                {name} </span><br />
                            {publishDate}
                        </div>

                    </div>
                    <div className='mr-3'>
                        <span onClick={() => handleBookmark(props.displayData)}>{time} min read <FontAwesomeIcon icon={faBook} />
                        </span>
                    </div>

                </div>
                <div className='text-4xl font-bold m-3'>
                    {title}
                </div>
                <button onClick={() => handleMarks(props.displayData)} className="btn btn-outline btn-success m-3">{marks}</button>
               </div>
        </div>
    );
};

export default Cart;