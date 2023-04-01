import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Bookmark = (props) => {
    const { title } = props.mark;
    if (props.mark > 1) {
        <div className="toast toast-top toast-center">
            <div className="alert alert-success">
                <div>
                    <span>its already Bookmarked.</span>
                </div>
            </div>
        </div>
    }
   
    return (
        <div className='p-4 text-2xl bold bg-slate-50 rounded-xl m-2'>
            {title}
        </div>
    );
};

export default Bookmark;