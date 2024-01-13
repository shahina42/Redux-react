import React, { useState, useEffect } from 'react';
import { createStore } from 'redux';
import Reducer from './Reducer';
import { incrementLike, decrementLike } from './Actions';

const store = createStore(Reducer);

const LikeCounter = () => {
  const [likes, setLikes] = useState(store.getState().likes);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setLikes(store.getState().likes);
    });

    return () => {
      unsubscribe();
    };
  }, []); 

  const handleIncrement = () => {
    store.dispatch(incrementLike());
  };

  const handleDecrement = () => {
    store.dispatch(decrementLike());
  };

  return (
    <div>
      <h1> {likes}</h1>
      <button onClick={handleIncrement}>Like</button>
      <button onClick={handleDecrement}>Unlike</button>
    </div>
  );
};

export default LikeCounter;