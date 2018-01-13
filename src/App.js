import React from 'react';
import { Wrapper, State } from './react-fm'

import Red from './components/red'
import Green from './components/green'
import Yellow from './components/yellow'
import './App.css';

const defaultState = {
  red: ''
}

const App = () => (
  <Wrapper initialState={defaultState} log>
    <State name="green">
      <Green />
    </State>
    <State name="yellow">
      <Yellow />
    </State>   
    <State name="red">
     <Red />
    </State>
  </Wrapper>
)

export default App;
