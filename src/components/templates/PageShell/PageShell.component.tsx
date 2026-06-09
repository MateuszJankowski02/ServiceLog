import { Box, Button, Container } from "@mui/material";
import {
  Car,
  ClipboardList,
  Inbox,
  LogOut,
  User,
  type LucideIcon,
} from "lucide-react";
import type { MouseEvent } from "react";
import { signOut } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import TopNav from "../../molecules/TopNav/TopNav.component";
import { auth } from "../../../firebase";
import type { PageShellProps } from "./PageShell.types";
import "./PageShell.styles.css";

const sidebarIcons: Record<string, LucideIcon> = {
  "/my-vehicles": Car,
  "/my-orders": ClipboardList,
  "/incoming-orders": Inbox,
  "/user": User,
  "/mechanic": User,
  "/": LogOut,
};

const getSidebarLabel = (label: string) => {
  if (label === "My Vehicles") return "Vehicles";
  if (label === "My Orders") return "Orders";
  return label;
};

export default function PageShell({ navItems, children }: PageShellProps) {
  const navigate = useNavigate();
  const isAppShell = navItems.some((item) => item.to === "/my-vehicles");

  const handleLogout = async (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    await signOut(auth);
    navigate("/");
  };

  if (isAppShell) {
    return (
      <Box className="page-shell page-shell--app">
        <Box component="aside" className="page-shell__sidebar">
          <Box className="page-shell__brand">ServiceLog</Box>
          <Box component="nav" className="page-shell__sidebar-nav">
            {navItems.map((item) => {
              const isLogout = item.label.toLowerCase() === "log out";
              const Icon = sidebarIcons[item.to] ?? ClipboardList;
              return (
                <Button
                  key={item.to + item.label}
                  component={NavLink}
                  to={item.to}
                  onClick={isLogout ? handleLogout : undefined}
                  className={
                    isLogout
                      ? "page-shell__sidebar-link page-shell__sidebar-link--logout"
                      : "page-shell__sidebar-link"
                  }
                  startIcon={<Icon size={20} />}
                  disableElevation>
                  {getSidebarLabel(item.label)}
                </Button>
              );
            })}
          </Box>
        </Box>
        <Box component="main" className="page-shell__app-content">
          {children}
        </Box>
      </Box>
    );
  }

  return (
    <Box className="page-shell">
      <TopNav items={navItems} />
      <Container
        maxWidth={false}
        disableGutters
        className="page-shell__content">
        {children}
      </Container>
    </Box>
  );
}
