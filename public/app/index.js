import React from 'react'
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Routes from './routes'
import reducer from './reducers'

injectTapEventPlugin()

const Index = () => {
  const store = createStore(reducer, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

ReactDOM.render(<Index />, document.getElementById('app'));
