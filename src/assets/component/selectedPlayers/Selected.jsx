import React, { Children } from 'react';
import SelectedPlayersList from '../SelecterdPlayersList/SelectedPlayersList';
import Playes from '../players/Playes';

const Selected = ({purchasedPlayers, removedPlayers, toogle, setToogle}) => {
    console.log(purchasedPlayers);
    let handleAddMore=()=>{

        setToogle(toogle===false)
        
    }
    
    return (
       <div className='max-w-[1200px] mx-auto'>
        {
            purchasedPlayers.length?purchasedPlayers.map(player=><SelectedPlayersList removedPlayers={removedPlayers} player={player}></SelectedPlayersList>):

            <h1 className='text-center text-6xl mt-[200px] font-bold'>Ops!! <br /> Goto the previous page😊</h1>
        }
    
    <button onClick={()=> handleAddMore()} className='px-3 py-2 rounded-xl bg-gray-200 font-bold mt-[30px]'> Add Players</button>
       </div>
    );
};

export default Selected;

