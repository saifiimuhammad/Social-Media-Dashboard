import { RiSettings3Line } from "react-icons/ri";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Sidebar = (props) => {

  const { logoTitle, toggleSidebar, showSidebar, sideLinks } = props;
  
  return (
    <aside className={showSidebar ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-logo-container">
      <h2 class="sidebar-logo">{logoTitle}</h2>
      <TbLayoutSidebarLeftCollapse className="sidebar-close icons" onClick={toggleSidebar} />
      </div>

      <ul className="sidebar-menu">
        {
          sideLinks.map((item, key) => {
            return (
              <li className="sidebar-items" key={key}><Link to={item.link} className="sidebar-links">{item.name}</Link></li>
            );
          })
        }
      </ul>

      <div className="settings-container">
        <a className="settings-link">Settings</a>
        <RiSettings3Line className="sidebar-settings-icon icons-2" />
      </div>
    </aside>
  )
}

export default Sidebar;
