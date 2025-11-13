import React, { use } from "react";
import PlayerImg from "../../assets/user1.png";
import CounTry from "../../assets/Group.png";
import PlayerCard from "../PlayerCard/PlayerCard";

const AvilablePlayers = ({ PlayersPromise,setAvilableBalence,AvilableBalence,setMyPlayers,myPlayers }) => {
  const PlayerData = use(PlayersPromise);
  console.log(PlayerData);
  return (
    <div className="bg-white text-black min-h-screen mb-5 ">
      <div className=" mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-4">
        {PlayerData.map(player => <PlayerCard AvilableBalence={AvilableBalence} setAvilableBalence={setAvilableBalence} setMyPlayers={setMyPlayers} myPlayers={myPlayers} player={player}></PlayerCard> )}
      </div>
    </div>
  );
};

export default AvilablePlayers;
