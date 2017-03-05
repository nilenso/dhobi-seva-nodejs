import React from 'react'
import 'materialize-css/bin/materialize.css'

const Header = (props) => {
  return (
    <header>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <div className="brand-logo center">{props.title}</div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;
