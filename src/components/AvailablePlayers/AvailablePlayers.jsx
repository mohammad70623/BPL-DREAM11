import userImg from "../../assets/user 1.png"
import flagImage from "../../assets/report 1.png"
import React, { use } from 'react';
const AvailablePlayers = ({playersPromise}) => {
    const palyersData = use(playersPromise)
    console.log(palyersData)
    return (
    
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">

        {
          palyersData.map(player=>
         <div className="card bg-base-100  shadow-sm p-4">
  <figure>
    <img
      src={player.playerImage}
      alt="Shoes" 
      className="w-full h-[300px] object-cover"/>
  </figure>
  <div className="mt-4">
   <div className="flex">
    <img src={userImg} alt="" /> <h2 className="card-title ml-2">{player.playerName
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
        <p className="font-bold">Price:$150000000</p>
      <button className="btn">Choose Player</button>
    </div>
  </div>
</div>)
        }
      </div>
      
    );
};

export default AvailablePlayers;