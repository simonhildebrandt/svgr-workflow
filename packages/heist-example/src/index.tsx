// import "@babel/polyfill";

import React from 'react';
import ReactDOM from 'react-dom/client';

import { AnimationContext } from './AnimationContext';
import Interface from './Interface';

const divStyle = {
  backgroundColor: '#35B',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%'
}

const App = () => <div style={divStyle}>
  <AnimationContext>
    <Interface/>
  </AnimationContext>
</div>;


ReactDOM.createRoot(document.getElementById('app')).render(<App/>);
