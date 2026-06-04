import React from 'react';

const SelectedCard = ({player}) => {
    console.log(player)
    return (
          <div className='border-2 mt-2 border-gray-300 p-3 rounded-2xl flex justify-between items-center'>
             <div className='flex items-center'>
            <img src={player.playerImage} alt="" className='h-[50px] w-[50px] rounded-xl' />
            <div className='ml-2'>
                <h1>{player.playerName}</h1>
                <p className='text-xs'>{player.playingRole}</p>

            </div>
           </div>
           <div>
            <img src="https://i.ibb.co.com/B7kY5zJ/Frame.png" alt="" />
           </div>
        </div>
    );
};

export default SelectedCard;