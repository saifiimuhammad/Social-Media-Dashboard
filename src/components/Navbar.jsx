import { useState, useEffect } from "react";
import { LuMenuSquare, LuUser } from "react-icons/lu";
import { RiArrowDropDownLine, RiCloseCircleLine } from "react-icons/ri";

const Navbar = (props) => {
  const { toggleSidebar } = props;

  const [showMenu, setShowMenu] = useState(false);
  const [scrollNav, onScrollNav] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        onScrollNav(true);
      } else {
        onScrollNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="header" className="header">
      <nav className={scrollNav ? "nav container on-nav-scroll" : "nav container"}>
        <div className="nav-left">
          <LuMenuSquare
            className="sidebar-open icons"
            onClick={toggleSidebar}
          />
        </div>

        <div className="nav-right">
          <ul className={showMenu ? "nav-menu show-nav-menu" : "nav-menu"}>
            {["Link 1", "Link 2", "Link 3"].map((item, key) => {
              return (
                <li key={key} className="nav-menu-opts">
                  <a className="nav-menu-links">{item}</a>
                </li>
              );
            })}
            <RiCloseCircleLine
              className="dropdown-close icons"
              onClick={toggleMenu}
            />
          </ul>

          <RiArrowDropDownLine
            className="nav-menu-dropdown icons"
            onClick={toggleMenu}
          />

          <div className="user-container">
            <LuUser className="user-settings icons" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
