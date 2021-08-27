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
                  href="https://www.instagram.com/igor_dumencic/"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  href="https://www.instagram.com/igor_dumencic/"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  href="https://www.instagram.com/igor_dumencic/"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  href="https://www.instagram.com/igor_dumencic/"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label">Contact</div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Email</li>
                <li>
                  <Link
                    to="#"
                    href="https://www.instagram.com/igor_dumencic/"
                  >
                    Get in contact 
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
                <li className="nav-info-label">Headquarter</li>
                <li>Route du Jura 49</li>
                <li>1700 Fribourg</li>
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
