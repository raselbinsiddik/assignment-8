import React from 'react';

const Bookmark = (props) => {
    const { blogs } = props.mark;
    console.log(props.mark);
    return (
        <div className='p-4 text-2xl bold bg-slate-100 rounded-xl m-2'>
            {blogs}
        </div>
    );
};

export default Bookmark;