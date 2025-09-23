import React from 'react';
import SelectedPlayersList from '../SelecterdPlayersList/SelectedPlayersList';

const Selected = ({purchasedPlayers, removedPlayers}) => {
    console.log(purchasedPlayers);
    
    return (
       <div>
        {
            purchasedPlayers.length?purchasedPlayers.map(player=><SelectedPlayersList removedPlayers={removedPlayers} player={player}></SelectedPlayersList>):

            <h1 className='text-center text-6xl mt-[200px] font-bold'>Ops!! <br /> Goto the previous page😊</h1>
        }
    
       </div>
    );
};

export default Selected;