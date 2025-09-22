import React, { use } from "react";
import Playerscard from "./Playerscard";



const Playes = ({ jsonData }) => {
  let data = use(jsonData);
  console.log(data);

  return (
    <div className="max-w-[1250px] m-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((item) => (
        <Playerscard item={item}></Playerscard>
      ))}
      </div>

    
    </div>
  );
};

export default Playes;
