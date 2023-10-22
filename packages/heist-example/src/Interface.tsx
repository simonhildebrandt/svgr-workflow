import React, { useContext, useEffect, useCallback } from 'react';
import { context as animationContext } from './AnimationContext';
import Heist from './Heist';


const keyActions = {
  Space: 1,
  Backspace: -1
};


export default () => {
  const { advance } = useContext(animationContext);

  const handler = useCallback((event) => {
    const {code} = event;
    const action = keyActions[code];

    if (action) {
      event.preventDefault();
      advance(action);
    }
  }, [advance]);

  useEffect(() => {
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [advance]);

  return <Heist/>;
}
