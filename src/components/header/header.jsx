import "./header.css";
import { FcNews } from "react-icons/fc";

function Header() {
  return (
    <header className="header">
      <div className="header header_container container">
        <a className="site-logo" href="">
          <FcNews />
        </a>
        <nav className="sitenav">
          <ul className="sitenav_list">
            <li className="sitenav_item">
              <a className="sitenav_link" href="">
                HOME
              </a>
            </li>
            <li className="sitenav_item">
              <a className="sitenav_link" href="">
                ABOUT US
              </a>
            </li>
            <li className="sitenav_item">
              <a className="sitenav_link" href="">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
