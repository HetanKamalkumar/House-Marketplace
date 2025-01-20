import { NavLink } from "react-router-dom";
import { ReactComponent as OfferIcon } from '../assets/svg/localOfferIcon.svg';
import { ReactComponent as ExploreIcon } from '../assets/svg/exploreIcon.svg';
import { ReactComponent as PersonOutlineIcon } from '../assets/svg/personOutlineIcon.svg';

function Navbar() {
  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "navbarListItemActive" : "navbarListItemName"
              }
            >
              {({ isActive }) => (
                <>
                  <ExploreIcon 
                    style={{ fill: isActive ? "#2c2c2c" : "#8f8f8f" }} 
                    width="36px" 
                    height="36px" 
                  />
                  <p>Explore</p>
                </>
              )}
            </NavLink>
          </li>
          <li className="navbarListItem">
            <NavLink 
              to="/offers" 
              className={({ isActive }) => 
                isActive ? "navbarListItemActive" : "navbarListItemName"
              }
            >
              {({ isActive }) => (
                <>
                  <OfferIcon 
                    style={{ fill: isActive ? "#2c2c2c" : "#8f8f8f" }} 
                    width="36px" 
                    height="36px" 
                  />
                  <p>Offer</p>
                </>
              )}
            </NavLink>
          </li>
          <li className="navbarListItem">
            <NavLink 
              to="/profile" 
              className={({ isActive }) => 
                isActive ? "navbarListItemActive" : "navbarListItemName"
              }
            >
              {({ isActive }) => (
                <>
                  <PersonOutlineIcon 
                    style={{ fill: isActive ? "#2c2c2c" : "#8f8f8f" }} 
                    width="36px" 
                    height="36px" 
                  />
                  <p>Profile</p>
                </>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Navbar;
