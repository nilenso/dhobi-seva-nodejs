import React from 'react'
import ReactDOM from 'react-dom'
import 'whatwg-fetch'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import CourseBoard from './components/CourseBoard'


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
    fetch('http://localhost:3000/api/v1/courses', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        courses: res
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
