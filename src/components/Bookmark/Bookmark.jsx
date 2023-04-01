import React from 'react';

const Bookmark = (props) => {
    const { blogs } = props.mark;
    return (
        <div className='p-4 text-2xl bold bg-slate-50 rounded-xl m-2'>
            {blogs}
        </div>
    );
};

export default Bookmark;