import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

// reducers
import rootReducer from '../reducers'

// init states
const initialState = {}

// middleware
const middleware = [thunk]

// store
const store = createStore(
  rootReducer,
  initialState,
  // applyMiddleware(...middleware)

  // adding "redux chrome dev tool"
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store
