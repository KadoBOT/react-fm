import React from 'react'

class Red extends React.Component {
  exitYellow() {
  }
  transitionYellow() {
  }
  enterRed() {
  }

  render() {
    return <button onClick={() => this.props.transition('TIMER')}>Go to  {this.props.red}</button>
  }
}

export default Red