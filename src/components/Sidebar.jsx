import { RiSettings3Line } from "react-icons/ri";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 class="sidebar-logo">Logo here</h2>

      <ul className="sidebar-menu">
        {
          ["Link 1", "Link 2", "Link 3"].map((item, key) => {
            return (
              <li className="sidebar-items" key={key}><a className="sidebar-links">{item}</a></li>
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