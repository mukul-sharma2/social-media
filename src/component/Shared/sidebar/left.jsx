import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaPlusCircle,
  FaBell,
  FaCommentDots,
  FaBookmark,
  FaCog,
  FaSignOutAlt
} from "react-icons/fa";
import './left.css'

function Leftbar() {
  return (
    <div className="leftbar">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "active" : ""}
          >
            <FaHome className="image"/> <p>Home</p>
          </NavLink>
        </li>

        

        <li>
          <NavLink
            to="/notification"
            className={({ isActive }) => isActive ? "active" : ""}
          >
            <FaBell className="image"/> <p>Notifications</p>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/messages"
            className={({ isActive }) => isActive ? "active" : ""}
          >
            <FaCommentDots className="image"/><p> Messages</p>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/bookmark"
            className={({ isActive }) => isActive ? "active" : ""}
          >
            <FaBookmark className="image"/> <p>Bookmarks</p>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) => isActive ? "active" : ""}
          >
            <FaUser className="image"/> <p>Friends</p>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) => isActive ? "active" : ""}
          >
            <FaCog className="image"/> <p>Settings</p>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/logout"
            className={({ isActive }) => isActive ? "active" : ""}
          >
            <FaSignOutAlt className="image"/> <p>Logout</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Leftbar;
