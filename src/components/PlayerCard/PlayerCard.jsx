import userImg from "../../assets/user 1.png"
import flagImage from "../../assets/report 1.png"
import React, { useState } from 'react';

const PlayerCard = ({player,setAvailableBalance, availableBalance, purshasedPlayers,setPurchasedPlayers }) => {
  const [isSelected, setIsSelected] = useState(false)  

  const handleSelected = (playerData) =>{
    if(availableBalance<playerData.price){
        alert("Not Enough Coins")
        return 
    }
setIsSelected(true); setAvailableBalance(availableBalance-playerData.price)
 setPurchasedPlayers([...purshasedPlayers, playerData])
  }

 

    return (
        <div className="card bg-base-100  shadow-sm p-4">
  <figure>
    <img
      src={player.playerImage}
      alt="Shoes" 
      className="w-full h-[300px] object-cover"/>
  </figure>
  <div className="mt-4">
   <div className="flex">
    <img src= {userImg} alt="" /> <h2 className="card-title ml-2">{player.playerName
}</h2>
   </div>
   <div className="flex justify-between mt-4 border-b-2 pb-2 border-gray-400">
    <div className="flex items-center">
        <img className="w-[20px] h-[20px]" src={flagImage} alt="" />
        <span className="ml-2">{player.
playerCountry}</span>
    </div>
    <button className="btn">{player.
playingRole
    }</button>
   </div>
   <div className="flex justify-between ">
    <span className="font-bold">{player.
rating
}</span>
    <span>{player.price}</span>
   </div>

    <div className="flex justify-between  mt-4">
    <span className="font-bold">{player.
battingStyle}</span>
    <span>{player.
bowlingStyle}</span>
   </div>
    <div className="card-actions mt-4 flex justify-between items-center">
        <p className="font-bold">Price:${player.price}</p>
      <button disabled={isSelected} onClick={()=>{handleSelected(player)
        
      }} className="btn">{isSelected===true? "Selected": "Choose Player"}</button>
    </div>
  </div>
</div>
    );
};

export default PlayerCard;