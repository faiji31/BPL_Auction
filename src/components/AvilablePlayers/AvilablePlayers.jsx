import React, { use } from 'react';
import PlayerImg from '../../assets/user1.png';
import CounTry from '../../assets/Group.png'

const AvilablePlayers = ({PlayersPromise}) => {
    const PlayerData = use(PlayersPromise);
    console.log(PlayerData);
    return ( 
       <div className='bg-white text-black min-h-screen mb-5 '>
         <div className=' mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-3'>
            {
                PlayerData.map(player=>         <div className="card   shadow-sm p-4">
  <figure>
    <img className='border-full w-full h-[400px] object-cover'
      src={player.image}
      alt="" />
  </figure>
  <div className="card-body">
    <div className='flex justify-between items-center'>
        <h2 className="card-title">{player.name}</h2>
        <img src={PlayerImg} alt="" />
    
    </div>
    <div className='flex justify-between items-center'>
        <div className='flex gap-5 items-center'>
        <img src={CounTry} alt="" />
        <span>{player.country}</span>
    </div>
    <button className='btn bg-gray-200 text-black'>{player.role}</button>
    </div>
    <h1 className='border-b-1 mt-2'></h1>
    <div className='flex justify-between items-center'>
        <h1 className='font-medium'>Rating</h1>
        <span>{player.rating}</span>
    </div>
    <h3>Right-Handed-Batsman</h3>
    <div className='flex justify-between items-center'>
        <h3 className='font-bold'>Price:{player.price_usd_estimated} </h3>
        <button className='btn'>Chosse Player</button>
    </div>

    
   
  </div>
</div>)
            }

        </div>
       </div>
    );
};

export default AvilablePlayers;