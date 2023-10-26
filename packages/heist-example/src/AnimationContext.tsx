import React, { createContext, useMemo, useEffect, useState } from 'react';
import { Subject } from 'rxjs';
import { defaults, steps } from './data';


const context = createContext({});

const AnimationContext = ({children}) => {
  const [stepNo, setStepNo] = useState(-1);

  // https://javascript.plainenglish.io/decoupling-react-components-with-an-event-bus-9d86170e09d7
  const bus = useMemo(() => new Subject(), []);

  function advance(direction) {
    const nextStep = stepNo + direction;
    if (nextStep < -1 || nextStep >= steps.length) {
      throw new Error(`Can't move to step ${nextStep + 1}`);
    }

    const step = direction == 1 ? steps[nextStep] : steps[stepNo];
    const stepActions = step[direction];

    stepActions.forEach(([type, payload]) => bus.next({type, payload}));
    setStepNo(nextStep);
  }

  return <context.Provider value={{defaults, bus, advance}}>{children}</context.Provider>
}

export { context, AnimationContext }
