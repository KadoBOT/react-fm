import React from 'react'
import { Machine } from 'xstate'

const standardMachine = Machine({
  initial: 'green',
  states: {
    green: {on: { TIMER: 'yellow', FAILURE: 'red' } },
    yellow: {
      onEntry: ['entryYellow', 'entryYellow2'],
      on: {
        TIMER: {
          red: {
            actions: ['transitionYellow']}
        }
      },
      onExit: ['exitYellow']
    },
    red: {
      on: { TIMER: 'green' },
      onEntry: 'enterRed'
    },
  }
});

export const State = (props) => {
  const { transition, children, initialState } = props
  return React.cloneElement(children, { transition, ...initialState })
}

export class Wrapper extends React.Component {
  state = {
    machine: {
      value: standardMachine.initialState.value,
    },
    initialState: this.props.initialState
  }

  componentDidMount() {
    this.props.log && console.log(standardMachine.initialState)
  }

  transition = (action, payload) => {
    const nextState = standardMachine.transition(this.state.machine.value, action)
    const child = this.props.children.find(child => child.props.name === nextState.value)

    if(nextState.actions) {
      const invokeAction = (action) => {
        const checkFn = child.props.children.type.prototype[action]
        return checkFn ? checkFn() : null
      }

      this.props.log && console.log(nextState)

      typeof nextState.actions === 'string' ?
        invokeAction(nextState.actions) :
        nextState.actions.map(action => invokeAction(action))
    }

    this.setState(state => ({initialState: {...state.initialState, ...payload}, machine: nextState}))
  }

  render() {
    const { state, props, transition } = this
    const { children } = props
    const { machine, initialState } = state

    const child = children.find(child => child.props.name === machine.value)
    return (
      <div>
        <pre>
          {JSON.stringify(machine.value)}
        </pre>
        {React.cloneElement(child, {
          transition,
          machine,
          initialState
        })}
      </div>
    )
  }
}
