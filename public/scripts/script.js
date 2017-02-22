$(document).ready(function () {
  $('.modal').modal()
  $('#createCourse').click(function () {
    $.ajax({
      url: 'http://localhost:3000/createCourse',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        name: $('#course_name').val(),
        start: $('#start_date').val(),
        end: $('#end_date').val()
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
    })
    .catch(function (err) {

    })
  })

  $.ajax({
    url: 'http://localhost:3000/course',
    dataType: 'json',
    success: function (res) {
      res.forEach(function (course) {
        let card = `
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
      })
    }
  })
})
