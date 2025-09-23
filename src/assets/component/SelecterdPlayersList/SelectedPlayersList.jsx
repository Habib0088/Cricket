import React from 'react';

const SelectedPlayersList = ({player,removedPlayers}) => {
    let {name,battingStyle,image}=player
    console.log(player);
    let handleRemove=()=>{
        removedPlayers(player)
    }
    return (
         <div className='max-w-[1200px] mx-auto  mt-4'>
            <div className='flex justify-between items-center p-2   space-y-4 border-2 border-gray-200 rounded-xl '>
                <div className="left flex justify-between items-center">
                    <div className="img">
                        <img className='rounded-xl w-[40px] h-[40px] mr-3' src={image} alt="" />
                    </div>
                    <div className="details">
                        <h4 className='font-bold'>{name} </h4>
                        <p>{battingStyle}</p>
                    </div>

                </div>
                <div onClick={()=>handleRemove()} className="right">
                    <img src="https://i.ibb.co.com/RTCxKDGZ/Frame.png" alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default SelectedPlayersList;