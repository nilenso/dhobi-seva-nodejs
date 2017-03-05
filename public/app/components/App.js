import React, { cloneElement } from 'react'
import Header from './common/Header'
import CourseBoard from './CourseBoard'
import CardAdd from './common/CardAdd'

const App = (props) => {
  return (
    <div>
      <Header title={props.children.props.route.title}/>
      <props.children.type><CardAdd /></props.children.type>
    </div>
  )
}

export default App
