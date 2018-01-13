import React from 'react'

export default ({ transition }) => {
  return (
    <div>
      <button key="1" onClick={() => transition('TIMER', {red: 'red'})}>Go to Yellow</button>
      <button key="2" onClick={() => transition('FAILURE', {red: 'blue'})}>Go to Red</button>
    </div>
  )
}