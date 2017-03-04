import React from 'react'
import 'materialize-css/bin/materialize.css'
import CourseCard from './CourseCard'

const renderCourseCards = (courses) => {
  return courses.map((course, index) => {
    return (
      <CourseCard key={index} coursename={course.course_name} startdate={course.start_date} enddate={course.end_date}/>
    );
  })
}

const CourseBoard = () => {
  return (
    <h1>This is CourseBoard</h1>
  )
}

export default CourseBoard
