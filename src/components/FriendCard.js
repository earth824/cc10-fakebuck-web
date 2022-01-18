import { useEffect, useState } from 'react';
import axios from '../config/axios';
import FriendList from './FriendList';
import FriendMenu from './FriendMenu';

function FriendCard() {
  const [mode, setMode] = useState('all');
  const [friendLists, setFriendLists] = useState([]);

  useEffect(() => {
    switch (mode) {
      case 'all': {
        axios.get('/friends?status=ACCEPTED').then(res => {
          setFriendLists(res.data.users);
        });
        break;
      }
      case 'request': {
        axios.get('/friends?status=REQUESTED').then(res => {
          setFriendLists(res.data.users);
        });
        break;
      }
      default: {
        console.log('default');
        setFriendLists([]);
      }
    }
  }, [mode]);

  const changeMode = value => {
    setMode(value);
  };

  return (
    <>
      <FriendMenu changeMode={changeMode} />
      <input
        className="form-control rounded-pill"
        type="search"
        placeholder="Search"
      />
      <FriendList friendLists={friendLists} mode={mode} />
    </>
  );
}

export default FriendCard;
