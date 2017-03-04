import React from 'react'
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux'
import Routes from './routes'
import reducer from './reducers'

const Index = () => {
  const store = createStore(reducer, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

ReactDOM.render(<Index />, document.getElementById('app'));
