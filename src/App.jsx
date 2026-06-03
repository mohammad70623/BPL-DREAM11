import { Suspense, useState } from "react";
import './App.css'
import AvailablePlayers
from "./components/AvailablePlayers/AvailablePlayers"
import SelectedPlayers from "./components/selectedPlayers/SelectedPlayers"
import Navvar from './components/Navvar/Navvar'

const fetchPlayers = async () => {
  const res = await fetch("/players.json")
  return res.json()

}

const playersPromise = fetchPlayers()

function App() {
  const [toggle, setToggle] = useState(true)
  const [availableBalance, setAvailableBalance] = useState(6000000000)
  

  return (
    <>
<Navvar availableBalance={availableBalance}></Navvar>
<div className=" max-w-1200px mx-auto flex justify-between items-center">
<h1 className="font-bold text-2xl"> Available player </h1>
<div className="font-bold">
  <button onClick={()=>setToggle(true)} className={`py-3 px-4 ${toggle === true ? "bg-green-200" : ""} border-r-0 border border-gray-400 rounded-l-2xl`}>Available</button>
  <button onClick={()=>setToggle(false)} className={`py-3 px-4 ${toggle === false ? "bg-green-200" : ""} border-r-0 border border-gray-400 rounded-l-2xl`} >Selected <span>0</span></button>
</div>
</div>

{
  toggle === true?<Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
  <AvailablePlayers availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playersPromise={playersPromise}></AvailablePlayers>
</Suspense>:<SelectedPlayers></SelectedPlayers>
}


    </>
  )
}

export default App
