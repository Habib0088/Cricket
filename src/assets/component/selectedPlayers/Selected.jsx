import React from 'react';
import SelectedPlayersList from '../SelecterdPlayersList/SelectedPlayersList';

const Selected = ({purchasedPlayers, removedPlayers}) => {
    console.log(purchasedPlayers);
    
    return (
       <div>
        {
            purchasedPlayers.map(player=><SelectedPlayersList removedPlayers={removedPlayers} player={player}></SelectedPlayersList>)
        }
       </div>
    );
};

export default Selected;