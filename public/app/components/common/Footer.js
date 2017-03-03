import React from 'react'
import 'materialize-css/bin/materialize.css'
import 'main.css'


const Footer = () => {
  return (
    <footer className="page-footer style-footer">
      <div className="footer-copyright">
        <div className="container">
          © 2017 Copyright Text
          <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
          <a className="btn-floating btn-large halfway-fab waves-effect waves-light teal position-add">
            <i className="material-icons">add</i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
