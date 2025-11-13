import { Suspense } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import AvilablePlayers from './components/AvilablePlayers/AvilablePlayers'



const fetchPlayer = async()=>{
  const res = await fetch("https://raw.githubusercontent.com/faiji31/bottles-data/refs/heads/main/players.json")
   return res.json()
}

function App() {
const PlayerPromise =  fetchPlayer()

  return (
    <>
    
     <NavBar></NavBar>
     <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
      <AvilablePlayers PlayersPromise={PlayerPromise} ></AvilablePlayers>
     </Suspense>
    

 
    
    
    </>
  )
}

export default App
