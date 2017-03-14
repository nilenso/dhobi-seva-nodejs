import React, { cloneElement, Component } from 'react'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from './common/Header'
import CourseBoard from './CourseBoard'
import CardAdd from './common/CardAdd'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header title={this.props.children.props.route.title} isAdmin={this.props.admin}/>
          <this.props.children.type {...this.props.params} ><CardAdd /></this.props.children.type>
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    admin: state.isAdmin
  }
}

export default connect(mapStateToProps, null)(App)
