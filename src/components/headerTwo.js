import React, { useEffect, useState } from "react"
import { openMenu, closeMenu } from "../animations/menuAnimations"
import { Link } from "gatsby"
import UpArrow  from "../assets/arrow";

// Define reducer
//

const Header = ({ dimensions }) => {
  
  const [menuState, setMenuState] = useState({ menuOpened: false });
  useEffect(() => {
    //Listening for page changes.
   
    if (menuState.menuOpened === true) {
      openMenu(dimensions.width);
    } else if (menuState.menuOpened === false) {
      closeMenu();
    }
  });

  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <Link to="/">gistrand atelier</Link>
          </div>
          <div className="nav-toggle">
            <div
              onClick={() => setMenuState({ menuOpened: true })}
              className="hamburger-menu"
            >
              <span></span>
              <span></span>
            </div>
            <div
              className="hamburger-menu-close"
              onClick={() => setMenuState({ menuOpened: false })}
            >
             <UpArrow/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
// <NavLink to='/' exact></NavLink>
export default Header
