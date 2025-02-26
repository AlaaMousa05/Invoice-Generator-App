import { FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./sidebar.css";
import { IoHomeOutline, IoHelpCircleOutline, IoLogOutOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { ButtonProps } from "../../types";
import AppIcon from "../../assets/payInvo.png";
import { useLocation } from "react-router";

const menuItems = [
  { name: "Dashboard", icon: IoHomeOutline, path: "/CreateInvoice" },
  { name: "Invoices", icon: CiSettings, path: "/CardList" },
];

const bottomItems = [
  { name: "Help", icon: IoHelpCircleOutline, path: "/Help", disabled: true },
];

const NavHeader = () => (
  <header className="sidebar-header">
    <img src={AppIcon} alt="App Icon" className="app-icon" />
    <span className="app-name">PayInvo</span>
  </header>
);

const NavButton: FC<ButtonProps & { disabled?: boolean }> = ({
  to,
  name,
  icon: IconComponent,
  isActive,
  onClick,
  disabled,
}) => (
  <Link
    to={disabled ? "#" : to}
    className={`nav-button ${isActive ? "active" : ""} ${disabled ? "disabled" : ""}`}
    onClick={() => !disabled && onClick(name)}
    style={{ pointerEvents: disabled ? "none" : "auto", opacity: disabled ? 0.5 : 1 }}
  >
    {IconComponent && <IconComponent className="icon" />}
    <span>{name}</span>
  </Link>
);

const Sidebar = ({ onLogout }: { onLogout: () => void }) => {
  const [activeItem, setActiveItem] = useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const activeMenuItem = menuItems.find((item) => item.path === currentPath);
    if (activeMenuItem) {
      setActiveItem(activeMenuItem.name);
    }
  }, [location.pathname]);

  const handleClick = (item: string) => {
    setActiveItem(item);
  };

  const handleLogout = () => {
    onLogout();
    navigate("/Login");
  };

  return (
    <aside className="sidebar">
      <NavHeader />
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavButton
            key={item.name}
            to={item.path}
            name={item.name}
            icon={item.icon}
            isActive={activeItem === item.name}
            onClick={handleClick}
          />
        ))}
      </nav>
      <div className="sidebar-bottom">
        {bottomItems.map((item) => (
          <NavButton
            key={item.name}
            to={item.path}
            name={item.name}
            icon={item.icon}
            isActive={activeItem === item.name}
            onClick={handleClick}
            disabled={item.disabled}
          />
        ))}
        <button className="nav-button logout-button" onClick={handleLogout}>
          <IoLogOutOutline className="icon" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
