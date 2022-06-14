import axios from '../../api/games';
import React, { useEffect, useState } from 'react';
import './gameList.styles.css';
import { GameListItem } from '../GameListItem/GameListItem';

const Gamelist = () => {
  const [data, setData] = useState([]);
  const [category, setCateroy] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get();
        console.log(res.data.CategoryGames[0].CategoryName);
        const format = res.data.CategoryGames[0].Games.map((el) => {
          return {
            gameId: el.GameID,
            name: el.GameName,
            img: `https://ambui.betonline.ag/amber${el.ImageUrlGame}`,
          };
        });
        setData(format);
        setCateroy(res.data.CategoryGames[0].CategoryName || 'All Games');
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log('ERROR', err.message);
        }
      }
    };
    fetchData();
  }, []);

  return (
    <div className='main'>
      <h1 className='title'>{category} Games</h1>
      <div className='wrapper'>
        {data.map((el) => (
          <GameListItem key={el.gameId} el={el} />
        ))}
      </div>
    </div>
  );
};
export default Gamelist;
