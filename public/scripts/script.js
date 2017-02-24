$(document).ready(function () {
  getCourse()
  $('.modal').modal()
  $('.datepicker').pickadate({
   selectMonths: true,
   selectYears: 15
  });

  $('#createCourse').click(createCourse)
})

function createCourse () {
  let courseDetails = validate.courseDetails($('#course_name').val(), $('#start_date').val(), $('#end_date').val())
  if (!courseDetails) {
    alert('Invalid input')
  } else {
  let [courseName, startDate, endDate] = courseDetails
  $.ajax({
    url: 'http://localhost:3000/createCourse',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({
      name: courseName,
      start: startDate,
      end: endDate
    })
  })
  .then(function (res) {
    $('#course_name').val(''),
    $('#start_date').val(''),
    $('#end_date').val('')
    let course = `
     <div class="col s6 m3">
       <div class="card blue-grey darken-1 small">
         <div class="card-content white-text">
           <span class="card-title" style="font-size: 30px; font-weight: 400">${res.name}</span>
           <h5 style="margin-top: 50px">${res.start}</h5>
           <h5>${res.end}</h5>
         </div>
         <div class="card-action">
           <a href="#students">Open</a>
           <a href="#">Receivables</a>
         </div>
       </div>
     </div>
    `
    $('#courses').append(course)
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
          <span class="card-title" style="font-size: 30px; font-weight: 400">${course.coursename}</span>
          <h5 style="margin-top: 50px">${course.startdate}</h5>
          <h5>${course.enddate}</h5>
        </div>
        <div class="card-action">
          <a href="#students">Open</a>
          <a href="#">Receivables</a>
        </div>
      </div>
    </div>
  `
  $('#courses').append(card)
}
