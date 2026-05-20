import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import type { RoleSwitcherProps } from "./RoleSwitcher.types";
import "./RoleSwitcher.styles.css";

export default function RoleSwitcher(_props: RoleSwitcherProps) {
  const location = useLocation();
  const isOwner = location.pathname === "/user";
  const isMechanic = location.pathname === "/mechanic";

  return (
    <Box className="role-switcher">
      <Typography variant="caption" className="role-switcher__hint">
        Temporary view switch (until auth is added):
      </Typography>
      <Box className="role-switcher__buttons">
        <Button
          disableElevation
          component={RouterLink}
          to="/user"
          className={`role-switcher__btn ${isOwner ? "role-switcher__btn--active" : ""}`}>
          Owner
        </Button>
        <Button
          disableElevation
          component={RouterLink}
          to="/mechanic"
          className={`role-switcher__btn ${isMechanic ? "role-switcher__btn--active" : ""}`}>
          Mechanic
        </Button>
      </Box>
    </Box>
  );
}
