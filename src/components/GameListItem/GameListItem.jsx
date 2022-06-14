import React from 'react';
import './gameListItem.styles.css';

export const GameListItem = ({ el: { gameId, name, img } }) => {
  return (
    <div className='container'>
      <img className='logoGame' src={img} alt='game logo' />
      <h3 className='subTitle'>{name}</h3>
    </div>
  );
};
