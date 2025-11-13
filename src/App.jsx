
import './App.css'
import NavImg from './assets/logo.png'
import CoinImg from './assets/dollar.png'

function App() {


  return (
    <>
     <div className="min-h-screen bg-white ">

      <div className="navbar w-[1200px] mx-auto  shadow-sm bg-white">
  <div className="flex-1">
    <a className=" text-xl text-black"><img className='w-[60px] h-[60px]' src={NavImg} alt="" /></a>
  </div>
  <div className="flex-none">
    <ul className='flex text-black gap-3 font-medium' >
      <li>Home</li>
      <li>Fixture</li>
      <li>Teams</li>
      <li>Schedule</li>
     <div className='items-center flex gap-1'>
      <span>Coin</span>
      <span>60000000000</span>
      <img src={CoinImg} alt="" />
     </div>



    </ul>
    
  </div>
</div>
      
    </div>
    </>
  )
}

export default App
