
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <div className="Footer">
      <ul className="navlinks-list">
        <li className="navlink-li">
          <NavLink className="navlink-item" to="/item">
            Item{" "}
          </NavLink>
        </li>
        <li className="navlink-li">
          <NavLink className="navlink-item" to="/">
            Home{" "}
          </NavLink>
        </li>
        <li className="navlink-li">
          <NavLink className="navlink-item" to="/profile">
            Profile
          </NavLink>
        </li>
      </ul>
     
    </div>
  );
};

export default Footer;