import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { SiAirbyte } from "react-icons//si";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { MdOutlineCancel } from "react-icons/md";
import { links } from "../../data/dummy";
import { styles } from "./indexStyle";
import { contextStore } from "../../contexts/index.";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useContext(contextStore);

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) return setActiveMenu(false);
  };
  return (
    <div className={styles.container}>
      {activeMenu && (
        <>
          <div className={styles.logoView}>
            <Link
              to="/"
              onClick={handleCloseSidebar}
              className={styles.logoText}
            >
              <SiAirbyte /> <span>Dashboard-Sali</span>
            </Link>
            <TooltipComponent content={"Menu"} position="BottomCenter">
              <button
                onClick={() => {
                  setActiveMenu((prevState) => !prevState);
                }}
                className={styles.closeButton}
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          {links.map((item, index) => (
            <div key={item.title}>
              <p className={styles.linksTitle}>{item.title}</p>
              {item.links.map((res) => (
                <NavLink
                  to={`/${res.name}`}
                  key={res.name}
                  onClick={handleCloseSidebar}
                  className={({ isActive }) =>
                    isActive ? styles.activeStyle : styles.normalStyle
                  }
                >
                  {res.icon}
                  <span className={styles.linkTitleText}>{res.name}</span>
                </NavLink>
              ))}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Sidebar;
