import { AppBar, Box, Button } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import BrandMark from "../../atoms/BrandMark/BrandMark.component";
import type { TopNavProps } from "./TopNav.types";
import "./TopNav.styles.css";

export default function TopNav({ items }: TopNavProps) {
  const location = useLocation();

  return (
    <AppBar
      position="static"
      elevation={0}
      color="transparent"
      className="top-nav">
      <Box className="top-nav__inner">
        <BrandMark component={NavLink} to="/" className="top-nav__brand" />
        <Box className="top-nav__links">
          {items.map((item) => {
            const isActive = location.pathname === item.to;
            const isLogout = item.label.toLowerCase() === "log out";
            const classNames = ["top-nav__link"];
            if (isActive && !isLogout) classNames.push("top-nav__link--active");
            if (isLogout) classNames.push("top-nav__link--logout");

            return (
              <Button
                key={item.to + item.label}
                component={NavLink}
                to={item.to}
                className={classNames.join(" ")}
                size="small"
                disableElevation>
                {item.label}
              </Button>
            );
          })}
        </Box>
      </Box>
    </AppBar>
  );
}
