import React, { cloneElement } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from './common/Header'
import CourseBoard from './CourseBoard'
import CardAdd from './common/CardAdd'

const App = (props) => {
  return (
    <MuiThemeProvider>
      <div>
        <Header title={props.children.props.route.title}/>
        <props.children.type {...props.params} ><CardAdd /></props.children.type>
      </div>
    </MuiThemeProvider>
  )
}

export default App
