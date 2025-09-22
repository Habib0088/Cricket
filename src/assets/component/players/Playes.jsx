import React, { use } from "react";
import Playerscard from "./Playerscard";
import head from "./"

const Playes = ({ jsonData }) => {
  let data = use(jsonData);
  console.log(data);

  return (
    <div>
      {data.map((item) => (
        <Playerscard item={item}></Playerscard>
      ))}

      <div className="card bg-base-100 w-96 shadow-sm p-4">
        <figure>
          <img className="rounded-xl mb-4"
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
            <span>😎</span>
          <h2 className="card-title font-bold inline ml-2">Virat Kholi</h2>
          <div className="flex justify-between">
                <div>
                    <img className="w-[50px] h-[50px] bg-black mr-7" src='./report.jpg' alt="" />
                    <span>India</span>
                </div>
                <button className="btn">All-Rounder</button>
          </div>
          
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playes;
