import React from 'react';
import NavImg from '../../assets/logo.png'
import CoinImg from '../../assets/dollar.png'

const NavBar = ({AvilableBalence}) => {
    return (
         <div className=" bg-white ">

      <div className="navbar max-w-[1200px] mx-auto  shadow-sm bg-white">
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
      <span>{AvilableBalence}</span>
      <img src={CoinImg} alt="" />
     </div>
    </ul>
    
  </div>
</div>
      
    </div>
    );
};

export default NavBar;