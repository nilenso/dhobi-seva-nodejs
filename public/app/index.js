import React from 'react'
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import Routes from './routes'
import test from './reducers'

const Index = () => {
  const store = createStore(test)
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

ReactDOM.render(<Index />, document.getElementById('app'));
