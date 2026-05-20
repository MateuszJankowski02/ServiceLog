import "./App.styles.css";
import type { ReactElement } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage.component";
import Subpage from "../pages/Subpage/Subpage.component";
import UserProfile from "../pages/UserProfile/UserProfile.component";
import MechanicProfile from "../pages/MechanicProfile/MechanicProfile.component";
import MyVehicles from "../pages/MyVehicles/MyVehicles.component";
import MyOrders from "../pages/MyOrders/MyOrders.component";
import IncomingOrders from "../pages/IncomingOrders/IncomingOrders.component";
import CreateServiceOrder from "../pages/CreateServiceOrder/CreateServiceOrder.component";
import AddServiceEntry from "../pages/AddServiceEntry/AddServiceEntry.component";
import VehicleHistory from "../pages/VehicleHistory/VehicleHistory.component";
import WorkReport from "../pages/WorkReport/WorkReport.component";
import { allRoutes } from "../navigation";
import type { AppProps } from "./App.types";

const PAGES: Record<string, ReactElement> = {
  "/user": <UserProfile />,
  "/mechanic": <MechanicProfile />,
  "/my-vehicles": <MyVehicles />,
  "/my-orders": <MyOrders />,
  "/incoming-orders": <IncomingOrders />,
  "/create-service-order": <CreateServiceOrder />,
  "/add-service-entry": <AddServiceEntry />,
  "/vehicle-history": <VehicleHistory />,
  "/work-report": <WorkReport />,
};

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3b82f6",
    },
    background: {
      default: "#0f1117",
      paper: "#1a1d27",
    },
    text: {
      primary: "#ffffff",
      secondary: "#9ca3af",
    },
    divider: "#2a2d37",
  },
  typography: {
    fontFamily: '"Space Grotesk", "Segoe UI", sans-serif',
    h1: {
      fontFamily: '"Consolas", "JetBrains Mono", "Courier New", monospace',
      fontWeight: 500,
      fontSize: "48px",
      lineHeight: "48px",
      letterSpacing: "-1.2px",
    },
    h2: {
      fontSize: "28px",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 12,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

export default function App(_props: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app-root">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {allRoutes.map((item) => (
            <Route
              key={item.to}
              path={item.to}
              element={PAGES[item.to] ?? <Subpage title={item.label} />}
            />
          ))}
        </Routes>
      </div>
    </ThemeProvider>
  );
}
