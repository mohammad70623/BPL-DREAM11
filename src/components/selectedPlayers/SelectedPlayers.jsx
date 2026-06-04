import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelecedPlayers = ({purshasedPlayers, removePlayer}) => {

    return (
        <div className='max-w-[1200px] mx-auto'>
       {
        purshasedPlayers.map(player => <SelectedCard key={player.id} removePlayer={removePlayer} player={player}></SelectedCard>)
       }
          </div>
    );
};

export default SelecedPlayers;