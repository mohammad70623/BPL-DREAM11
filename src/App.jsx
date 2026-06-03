import { Suspense } from "react";
import './App.css'
import AvailablePlayers
from "./components/AvailablePlayers/AvailablePlayers"
import SelectedPlayers from "./components/selectedPlayers/SelectedPlayers"
import Navvar from './components/Navvar/Navvar'

const fetchPlayers = async () => {
  const res = await fetch("/players.json")
  return res.json()

}

function App() {
  
const playersPromise = fetchPlayers()
  return (
    <>
<Navvar></Navvar>
<Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
  <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
</Suspense>


<SelectedPlayers></SelectedPlayers>
    </>
  )
}

export default App
