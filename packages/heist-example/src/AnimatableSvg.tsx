import React, { useEffect, useContext } from 'react';
import { motion, useAnimate } from 'framer-motion';
import { context as animationContext } from './AnimationContext';



const Animatable = (tag) => (params) => {
  const [scope, animate] = useAnimate()
  const Tag = motion[tag];
  const { id } = params;


  const { defaults, bus } = useContext(animationContext)
  const initialStyle = defaults[id] || {};

  useEffect(() => {
    const sub = bus.subscribe(({type, payload}) => {
      if (type === id) {
        animate(scope.current, ...payload);
      }
    });
    return () => {
      sub.unsubscribe()
    };
  }, []);

  return <Tag
    ref={scope}
    animate={initialStyle}
    initial={false}
    {...params}
  />
}

export const Rect = Animatable('rect');
export const Path = Animatable('path');
export const G = Animatable('g');
export const LinearGradient = Animatable('linearGradient');
