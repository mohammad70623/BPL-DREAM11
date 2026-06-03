
import React, { use } from 'react';
const AvailablePlayers = ({playersPromise}) => {
    const palyersData = use(playersPromise)
    console.log(palyersData)
    return (
        <div>
            available
        </div>
    );
};

export default AvailablePlayers;