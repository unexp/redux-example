import React, { Component } from 'react'
import './App.css'

// `Provider` are react componnet
// group "react component" and "redux store"
import { Provider } from 'react-redux'

// import { createStore, applyMiddleware } from 'redux'
// create store
// const store = createStore(() => [], {}, applyMiddleware())

// move store to separate file
import store from './store'

// components
import Posts from './components/Posts'
import Postform from './components/Postform'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Postform />
          <hr />
          <Posts />
        </div>
      </Provider>
    )
  }
}

export default App
