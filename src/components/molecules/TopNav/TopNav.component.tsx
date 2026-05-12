import { AppBar, Box, Button, Toolbar } from "@mui/material";
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
      <Toolbar className="top-nav__toolbar">
        <BrandMark component={NavLink} to="/" className="top-nav__brand" />
        <Box className="top-nav__links">
          {items.map((item) => {
            const isActive = location.pathname === item.to;
            const linkClassName = isActive
              ? "top-nav__link top-nav__link--active"
              : "top-nav__link";

            return (
              <Button
                key={item.to}
                component={NavLink}
                to={item.to}
                className={linkClassName}
                size="small"
                disableElevation>
                {item.label}
              </Button>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
