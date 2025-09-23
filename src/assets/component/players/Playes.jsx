import React, { use } from "react";
import Playerscard from "./Playerscard";



const Playes = ({ jsonData,availableBalance,setAvailableBalance, setPurchasedPlayers,purchasedPlayers }) => {
  let data = use(jsonData);


  return (
    <div className="max-w-[1250px] m-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((item) => (
        <Playerscard setPurchasedPlayers={setPurchasedPlayers} purchasedPlayers={purchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} item={item}></Playerscard>
      ))}
      </div>

    
    </div>
  );
};

export default Playes;
