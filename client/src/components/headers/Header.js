import React from 'react'
import { Link } from 'react-router-dom'
 

function Header(){
    return(
        <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
         
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Tutorials
              </Link>
            </li>
          
          </div>
        </nav>

      </div>
    )
}

export default Header