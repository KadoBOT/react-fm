import React from 'react'

// export default ({ transition }) => {
//   return <button onClick={() => transition('TIMER')}>Go to Red</button>
// }

class Yellow extends React.Component {
  entryYellow() {
    console.log('1')
  }
  entryYellow2() {
    console.log('2')
  }

  render(){
    return <button onClick={() => this.props.transition('TIMER')}>Go to {this.props.red}</button>
  }
}

export default Yellow