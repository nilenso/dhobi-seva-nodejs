import React from 'react'
import ReactDOM from 'react-dom'
import 'whatwg-fetch'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import CourseBoard from './components/CourseBoard'


// const courses = [
//   {
//     coursename: 'Dhyan',
//     startdate: 'March 25, 2017',
//     enddate: 'May 15, 2017'
//   },
//   {
//     coursename: 'Simran',
//     startdate: 'March 25, 2017',
//     enddate: 'May 15, 2017'
//   },
//   {
//     coursename: 'Amritam',
//     startdate: 'March 25, 2017',
//     enddate: 'May 15, 2017'
//   },
//   {
//     coursename: 'Upasna',
//     startdate: 'March 25, 2017',
//     enddate: 'May 15, 2017'
//   },
//   {
//     coursename: 'Sabhya',
//     startdate: 'March 25, 2017',
//     enddate: 'May 15, 2017'
//   },
//   {
//     coursename: 'Sadhna',
//     startdate: 'March 25, 2017',
//     enddate: 'May 15, 2017'
//   }
// ]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: []
    }
  }

  componentWillMount() {
    this.getCourses();
  }

  getCourses() {
    fetch('http://localhost:3000/courses', {
      method: 'GET'
    })
    .then(res => {
      console.log(res);
      this.setState({
        courses: res.data.courses
      })
    })
    .catch(err => {

    });
  }

  render() {
    return (
      <div>
        <Header />
        <CourseBoard courses={this.state.courses}/>
        <Footer />
      </div>
    );
  }

}

ReactDOM
.render(<App />,
  document.getElementById('app'))
