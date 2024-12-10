## Redux
##### Redux is a state management library for JavaScript applications, often used with React. It centralizes state management and provides a predictable way to manage state across the app.

#### Core Concepts

###### Store: Holds the application's state.

###### Action: Describes a change in state.

###### Reducer: A function that updates state based on actions.

###### Dispatch: A method to send actions to the store.

#### Example

```
import { createStore } from 'redux'

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

const store = createStore(counterReducer)

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'increment' })
store.dispatch({ type: 'increment' })
store.dispatch({ type: 'decrement' })
```

## Redux Toolkit

##### Redux Toolkit is the official, recommended way to write Redux logic. It provides a set of tools and best practices to reduce boilerplate and improve the developer experience.

#### Core Features

###### configureStore: Simplifies store setup.

###### createSlice: Combines actions and reducers.

###### createAsyncThunk: Simplifies async logic.

#### Example

```
import { configureStore, createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment(state) {
      state.count += 1
    },
    decrement(state) {
      state.count -= 1
    }
  }
})

const store = configureStore({
  reducer: counterSlice.reducer
})

store.subscribe(() => console.log(store.getState()))

store.dispatch(counterSlice.actions.increment())
store.dispatch(counterSlice.actions.increment())
store.dispatch(counterSlice.actions.decrement())
```