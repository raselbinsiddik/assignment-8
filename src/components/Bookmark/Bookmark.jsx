import React from 'react';

const Bookmark = (props) => {
    const { title } = props.mark;
    if (title > 1) {
        <div className="toast toast-top toast-center">
            <div className="alert alert-info">
                <div>
                    <span>New mail arrived.</span>
                </div>
            </div>
            <div className="alert alert-success">
                <div>
                    <span>Message sent successfully.</span>
                </div>
            </div>
        </div>
    }
    else {
        
    }
    return (
        <div className='p-4 text-2xl bold bg-slate-50 rounded-xl m-2'>
            {title}
        </div>
    );
};

export default Bookmark;