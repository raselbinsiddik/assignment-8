import React from 'react';

const Mark = ({marks}) => {
    
    let count = 0;
    for (const displayData of marks) {
        count = count + displayData.time;
    }
    return (
        <div>
            <p>Spent time on read: {count} min</p>
        </div>
    );
};

export default Mark;