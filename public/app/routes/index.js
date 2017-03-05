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
import StudentAddForm from '../components/StudentAddForm'

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/courses" />
        <Route path="courses" title="Courses" component={CourseBoard} />
        <Route path="addcourse" title="Add Course" component={CourseAddForm} />
        <Route path="students/:courseId" title="Students" component={StudentBoard} />
        <Route path="addstudent" title="Add Student" component={StudentAddForm} />
      </Route>
    </Router>
  )
}

export default Routes
