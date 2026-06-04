
import React, { use } from 'react';
import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({playersPromise, setAvailableBalance, availableBalance, setPurchasedPlayers,purshasedPlayers }) => {
    const playersData = use(playersPromise)
    console.log(playersData)
    return (
    
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">

        {
          playersData.map(player=> <PlayerCard availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player={player} purshasedPlayers={purshasedPlayers}
    setPurchasedPlayers={setPurchasedPlayers}></PlayerCard>
          )
        }
      </div>
      
    );
};

export default AvailablePlayers;