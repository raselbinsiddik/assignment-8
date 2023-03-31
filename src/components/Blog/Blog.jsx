import React from 'react';

const Blog = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ms-20 mr-20 mt-10'>
            <div className='text-2xl bold text-blue-600  bg-slate-300 p-4 rounded-xl'>
                <p>Question1: Props vs state.</p>
                <p className='p-5 text-xl bold bg-slate-200 rounded-xl'>Answer1: in both props and state are used to manage data within a copmonent. Props are passed down to a copmonent from its parent component.props are immutable, which means they are nothing to change from the component.</p>
                <p>Question2: How does useState work?</p>
                <p className='p-5 text-xl bold bg-slate-200 rounded-xl'>Answer2:useState is hook in react that allows functional components to have state.it is a funtion that returns array with tow elements.its used alltime to handle onClick button.</p>
                <p>Question3: Purpose of useEffect other than fetching data.</p>
                <p className='p-5 text-xl bold bg-slate-200 rounded-xl'>Answer3: useEffect are allways use for fetching data.it also used to updating data.such as updating the DOM, subscribing to an event, or starting and stopping timers. </p>
            </div>
        </div>
    );
};

export default Blog;