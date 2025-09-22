import React from "react";

const Playerscard = ({ item }) => {
  let {
    name,
    image,
    price,
    country,
    role,
    battingStyle,
    rating,
    bowlingStyle,
  } = item;

  return (
    <div className="">
      <div className="card bg-base-100 shadow-sm p-4 rounded-md h-full">
        <figure>
          <img
            className="rounded-xl mb-4"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <span>😎</span>
          <h2 className="card-title font-bold inline ml-2">{name}</h2>
          <div className="flex justify-between border-b-2 border-gray-100 py-2">
            <div className="flex  items-center">
              <img
                className="mr-2 w-[20px] h-[20px]"
                src="../../../../public/report.jpg"
                alt=""
              />
              <span>{country}</span>
            </div>
            <button className="bg-gray-300 px-2 py-1 rounded-md ">
              {role}
            </button>
          </div>

          <div className="rating flex justify-between">
            <span className="font-bold"> Rating</span>
            <small>{rating}</small>
          </div>
          <div className="style flex justify-between">
            <span className="font-bold">{battingStyle}</span>
            <span>{bowlingStyle}</span>
          </div>
          <div className="style flex justify-between">
            <span className="font-bold">
              Price $ <span>{price}</span>
            </span>
            <button className="bg-gray-300 px-2 py-1 rounded-md">
              Choose Player
            </button>
          </div>
          <div className="card-actions text-end mt-4">
            <button className="bg-gray-300 px-2 py-1 rounded-md outline outline-gray-400">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playerscard;
