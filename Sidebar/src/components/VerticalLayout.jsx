// ** React Imports
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// ** Store & Actions
import { useSelector, useDispatch } from "react-redux";
import {handleMenuCollapsed} from "../redux/layout";

// ** Third Party Components
import classnames from "classnames";

// ** Configs

// ** Custom Components
import SidebarComponent from "../components/vertical-menu";

// ** Custom Hooks
import { useSkin } from "../hooks/useSkin";

// ** Styles
import '../scss/menu/menu-types/vertical-menu.scss'
import '../scss/menu/menu-types/vertical-overlay-menu.scss'

const VerticalLayout = (props) => {
  // ** Props
  const { menu , children, menuData } = props;

  // ** Hooks
  const { skin } = useSkin();

  // ** States
  const [isMounted, setIsMounted] = useState(false);
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // ** Vars
  const dispatch = useDispatch();
  const layoutStore = useSelector((state) => state.layout);

  // ** Update Window Width
  const handleWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  // ** Vars
  const location = useLocation();
  const isHidden = layoutStore.menuHidden;
  const menuCollapsed = layoutStore.menuCollapsed;

  // ** Toggles Menu Collapsed
  const setMenuCollapsed = (val) => dispatch(handleMenuCollapsed(val));

  // ** Handles Content Width

  // ** Handles Content Width

  //** This function will detect the Route Change and will hide the menu on menu item click
  useEffect(() => {
    if (menuVisibility && windowWidth < 1200) {
      setMenuVisibility(false);
    }
  }, [location]);

  //** Sets Window Size & Layout Props
  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener("resize", handleWindowWidth);
    }
  }, [windowWidth]);

  //** ComponentDidMount
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div
      className={classnames(
        `wrapper vertical-layout `,
        {
          // Modern Menu
          "vertical-menu-modern": windowWidth >= 1200,
          "menu-collapsed": menuCollapsed && windowWidth >= 1200,
          "menu-expanded": !menuCollapsed && windowWidth > 1200,

          // Overlay Menu
          "vertical-overlay-menu": windowWidth < 1200,
          "menu-hide": !menuVisibility && windowWidth < 1200,
          "menu-open": menuVisibility && windowWidth < 1200,
        }
      )}
      {...(isHidden ? { "data-col": "1-column" } : {})}
    >
      {!isHidden ? (
        <SidebarComponent
          skin={skin}
          menu={menu}
          menuData={menuData}
          menuCollapsed={menuCollapsed}
          menuVisibility={menuVisibility}
          setMenuCollapsed={setMenuCollapsed}
          setMenuVisibility={setMenuVisibility}
        />
      ) : null}
      
      {children}

      {/* Vertical Nav Menu Overlay */}
      <div
        className={classnames("sidenav-overlay", {
          show: menuVisibility,
        })}
        onClick={() => setMenuVisibility(false)}
      ></div>
      {/* Vertical Nav Menu Overlay */}
      
    </div>
  );
};

export default VerticalLayout;
