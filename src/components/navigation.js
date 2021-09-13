import React from "react"
import { Link } from "gatsby"
const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Menu</div>
            <ul className="nav-links">
              <li>
                <Link
                  to="/blog"
                 
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
              
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  href="https://www.instagram.com/igor_dumencic/"
                >
                  Shop
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label">Contact</div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Get in contact </li>
                <li>
                  <Link
                    to="#"
                    href="https://www.instagram.com/igor_dumencic/"
                  >
                    Email
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    href="https://www.instagram.com/igor_dumencic/"
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Location</li>
                <li>Sweden, Stockholm</li>
                <li>Stockholm</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Phone</li>
                <li>+41 (0) 79 510 28 70</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Legal</li>
                <li>Privacy and Cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
