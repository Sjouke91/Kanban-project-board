import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.scss";
import SidebarData from "./SidebarData.js";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparant",
    },
  },
});

function Sidebar() {
  const [menuCollapse, set_menuCollapse] = useState("true");
  const classes = useStyles();
  const height = menuCollapse ? "40px" : "95vh";

  return (
    <div className="sidebar" style={{ height: height }}>
      <ul className="sidebarList">
        <li className="hamburger">
          <div>
            <div onClick={() => set_menuCollapse(!menuCollapse)}>
              <MenuIcon />
            </div>
          </div>
        </li>

        {menuCollapse
          ? null
          : SidebarData.map((element, index) => {
              return (
                <Link key={index} to={element.link}>
                  <li className="row">
                    <div id="icon">{element.icon}</div>
                  </li>
                </Link>
              );
            })}
      </ul>
    </div>
  );
}

export default Sidebar;
