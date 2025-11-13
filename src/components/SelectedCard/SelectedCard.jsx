import React from 'react';
import DeleteImg from "../../assets/Frame.png";

const SelectedCard = ({player}) => {
    console.log(player)
    return (
        <div className="max-w-[1200px] mx-auto flex justify-between items-center border-2 border-gray-300 p-3">
        <div className="flex items-center gap-5">
          <img
            className="h-[100px] w-[100px]"
            src={player.image}
            alt=""
          />
          <div>
            <h1 className="font-semibold ">{player.name}</h1>
            <h3 className="font-medium">{player.role}</h3>
          </div>
        </div>
        <div>
          <img src={DeleteImg} alt="" />
        </div>
      </div>
    );
};

export default SelectedCard;