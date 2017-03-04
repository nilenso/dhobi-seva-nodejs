import React from 'react'
import { Link } from 'react-router'
import 'materialize-css/bin/materialize.css'
import 'main.css'


const Footer = () => {
  return (
    <footer className="page-footer style-footer">
      <div className="footer-copyright">
        <div className="container">
          © 2017
          <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
          <Link to={`/addcourse`}>
            <a className="btn-floating btn-large halfway-fab waves-effect waves-light teal position-add">
              <i className="material-icons">add</i>
            </a>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
