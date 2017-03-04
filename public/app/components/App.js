import React from 'react'
import ReactDOM from 'react-dom'
import 'whatwg-fetch'
import Header from './common/Header'
import Footer from './common/Footer'
import CourseBoard from './CourseBoard'

const App = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default App
