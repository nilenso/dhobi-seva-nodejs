(function(window, $){
  window.dsn = window.dsn || {};
  $(window.document).ready(function () {
    getCourse()
    $('.modal').modal()
    $('.datepicker').pickadate({
     selectMonths: true,
     selectYears: 15
    })
    $('#createCourse').click(createCourse)
  })

  function createCourse () {
    let validate = window.dsn.validate;
    let courseDetails = validate.courseDetails($('#course_name').val(), $('#start_date').val(), $('#end_date').val())
    if (courseDetails === null) {
      alert('Invalid input')
    } else {
    let [courseName, startDate, endDate] = courseDetails
    $.ajax({
      url: 'http://localhost:3000/createCourse',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        coursename: courseName,
        startdate: startDate,
        enddate: endDate
      })
    })
    .then(function (res) {
      $('#course_name').val(''),
      $('#start_date').val(''),
      $('#end_date').val('')
      appendCourse(res)
      $('.modal').modal('close')
    })
    .catch(function (err) {

    })
  }
  }

  function getCourse() {
    $.ajax({
      url: 'http://localhost:3000/getCourse',
      dataType: 'json',
      success: function (res) {
        res.forEach(function (course) {
          appendCourse(course)
        })
      }
    })
  }

  function appendCourse(course) {
    const card = `
      <div class="col s6 m3">
        <div class="card blue-grey darken-1 small">
          <div class="card-content white-text">
            <span class="card-title card-title-style">${course.coursename}</span>
            <hr>
            <p class="start-date-style">${course.startdate}</p>
            <p class="end-date-style">${course.enddate}</p>
          </div>
          <div class="card-action course-action">
            <div class="col s6 center-align">
              <a href="#students">Open</a>
            </div>
            <div class="col s6 center-align">
              <a href="#">End</a>
            </div>
          </div>
        </div>
      </div>
    `
    $('#courses').append(card)
  }
})(window, $);
