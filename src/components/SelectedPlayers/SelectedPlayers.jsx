import React from "react";
import SelectedCard from "../SelectedCard/SelectedCard";


const SelectedPlayers = ({ myPlayers }) => {
  return (
    <div className="bg-white text-black">
        {
            myPlayers.map(player=><SelectedCard player={player}></SelectedCard>)
            
        }
     
    </div>
  );
};

export default SelectedPlayers;
