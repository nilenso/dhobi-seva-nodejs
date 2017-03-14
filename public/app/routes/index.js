import React from 'react';
import {
  Router,
  Route,
  IndexRedirect,
  browserHistory,
  Redirect
} from 'react-router'
import App from '../components/App'
import CourseBoard from '../components/CourseBoard'
import StudentBoard from '../components/StudentBoard'
import CourseAddForm from '../components/CourseAddForm'
import StudentAddForm from '../components/StudentAddForm'
import Deposits from '../components/Deposits'
import Laundry from '../components/Laundry'
import Purchases from '../components/Purchases'
import CourseEnd from '../components/CourseEnd'
import AddUser from '../components/AddUser'

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/courses" />
        <Route path="courses" title="Courses" component={CourseBoard} />
        <Route path="addcourse" title="Add Course" component={CourseAddForm} />
        <Route path="students/:courseId" title="Students" component={StudentBoard} />
        <Route path="addstudent/:courseId" title="Add Student" component={StudentAddForm} />
        <Route path="deposits/:studentId" title="Deposits" component={Deposits} />
        <Route path="laundry/:studentId" title="Laundry" component={Laundry} />
        <Route path="purchases/:studentId" title="Purchases" component={Purchases} />
        <Route path="endcourse/:courseId" title="End Course" component={CourseEnd} />
        <Route path="adduser" title="Add User" component={AddUser} />
        <Redirect from="sendcode" to="courses" />
      </Route>
    </Router>
  )
}

export default Routes
