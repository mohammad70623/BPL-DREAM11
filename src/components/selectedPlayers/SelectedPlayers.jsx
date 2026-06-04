import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelecedPlayers = ({purshasedPlayers}) => {

    return (
        <div className='max-w-[1200px] mx-auto'>
       {
        purshasedPlayers.map(player => <SelectedCard player={player}></SelectedCard>)
       }
          </div>
    );
};

export default SelecedPlayers;