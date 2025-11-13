import { Suspense, useState } from 'react'
import './App.css'

import NavBar from './components/NavBar/NavBar'
import AvilablePlayers from './components/AvilablePlayers/AvilablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'



const fetchPlayer = async()=>{
  const res = await fetch("https://raw.githubusercontent.com/faiji31/bottles-data/refs/heads/main/players.json")
   return res.json()
}
const PlayerPromise =  fetchPlayer()
function App() {
  const [toggle,setToggle]=useState(true)
  const [AvilableBalence,setAvilableBalence]=useState(60000000)
  const [myPlayers,setMyPlayers]=useState([])


  return (
    <>
    
     <NavBar AvilableBalence={AvilableBalence}></NavBar>
     <div className='bg-white'>
      <div className='max-w-[1200px] mx-auto  text-black py-10 flex justify-between items-center '>
      <h1 className='font-semibold'>Avilable Player</h1>
      <div className='flex ' >
        <button onClick={()=>setToggle(true)} className={`py-3 px-4 border-1 border-gray-200 font-semibold rounded-l-2xl ${toggle===true?"bg-[#E7FE29]":""}`}>Avilable </button>
        <button onClick={()=>setToggle(false)} className={`py-3 px-4 border-1 border-gray-200 font-semibold rounded-r-2xl ${toggle===false?"bg-[#E7FE29]":""}`}>Selected <span>(0)</span></button>
      </div>
     </div>
     </div>
     {
      toggle === true ?<Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
      <AvilablePlayers setMyPlayers={setMyPlayers} myPlayers={myPlayers} AvilableBalence={AvilableBalence} setAvilableBalence={setAvilableBalence}  PlayersPromise={PlayerPromise} ></AvilablePlayers>
     </Suspense> :  <SelectedPlayers myPlayers={myPlayers}></SelectedPlayers>
     }
     
    
    

 
    
    
    </>
  )
}

export default App
