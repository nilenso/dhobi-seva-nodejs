import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/Header'
import Footer from './components/common/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  )
}

ReactDOM
.render(<App />,
  document.getElementById('app'))
