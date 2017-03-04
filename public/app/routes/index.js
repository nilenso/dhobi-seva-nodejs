import React from 'react';
import {
  Router,
  Route,
  IndexRedirect,
  browserHistory
} from 'react-router'
import App from '../components/App'
import CourseBoard from '../components/CourseBoard'
import StudentBoard from '../components/StudentBoard'
import CourseAddForm from '../components/CourseAddForm'

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/courses" />
        <Route path="courses" component={CourseBoard} />
        <Route path="/addcourse" component={CourseAddForm} />
        <Route path="students/:courseId" component={StudentBoard} />
      </Route>
    </Router>
  )
}

export default Routes
