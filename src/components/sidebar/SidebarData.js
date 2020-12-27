import React from "react";
import { AccountCircle, Home, Note } from "@material-ui/icons";

export const SidebarData = [
  {
    title: "Home",
    icon: <Home />,
    link: "/",
  },
  {
    title: "Login",
    icon: <AccountCircle />,
    link: "/login",
  },
  {
    title: "Signup",
    icon: <Note />,
    link: "/signup",
  },
];

export default SidebarData;
