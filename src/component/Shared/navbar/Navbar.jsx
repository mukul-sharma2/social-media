import { Link } from "react-router-dom";
import "./Navbar.css";
import Input from "../../UI/input/input";
function Navbar({ text, onClick, variant = "", type = "button" }) {
  return (
    <nav>
      <div className="logo">C <small   style={{
      display: "inline-block",
      marginLeft: "-16px",
      marginTop: "15px",
    }}><sub>R</sub></small></div>
      <div className="search">
        <Input />
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/notification"> Notifications</Link>
        </li>
        <li >
          <Link to="/profile">
            <img className="profile"
              src="https://imgs.search.brave.com/VsuqRd_o88Dv4i3ledX3CEuVmhw19LX3D8GstXpw0Q0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8xNy82MS9t/YWxlLWF2YXRhci1w/cm9maWxlLXBpY3R1/cmUtdmVjdG9yLTEw/MjExNzYxLmpwZw"
              alt="ffsgsfgs"
            />
          </Link>
        </li>{" "}
      </ul>
    </nav>
  );
}

export default Navbar;
