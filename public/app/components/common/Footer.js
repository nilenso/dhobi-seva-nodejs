import React from 'react'
import 'materialize-css/bin/materialize.css'
import 'main.css'


const Footer = () => {
  return (
    <footer className="page-footer">
      {/* <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <a className="btn-floating btn-large halfway-fab waves-effect waves-light teal">
              <i className="material-icons">add</i>
            </a>
          </div>
        </div>
      </div> */}
      <div className="footer-copyright">
        <div className="container">
          © 2017 Copyright Text
          <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
