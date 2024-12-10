## Reducers
##### A reducer is a function that takes in the current state and an action, and returns the new state. Reducers are pure functions, meaning they always produce the same output for the same input and have no side effects. They're a key concept in managing state in applications.

#### Example

```
const initialState = { count: 0 }

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      return state
  }
}
```

## useReducer

##### useReducer is a React Hook that provides an alternative to useState for managing state in complex components. It works similarly to Redux reducers, making it useful for managing state logic within a component.

#### Example

```
import React, { useReducer } from 'react'

const initialState = { count: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  )
}
```