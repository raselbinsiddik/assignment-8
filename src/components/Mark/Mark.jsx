import React from 'react';

const Mark = ({marks}) => {
    console.log(marks);
    let mark = 0;
    for (const displayData of marks) {
        mark = mark + displayData.time;
    }
    return (
        <div>
            <p>Spent time on read:{mark} min</p>
        </div>
    );
};

export default Mark;