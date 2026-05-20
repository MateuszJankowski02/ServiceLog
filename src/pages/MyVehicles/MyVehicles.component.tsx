import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import PageShell from "../../components/templates/PageShell/PageShell.component";
import VehicleCard from "../../components/molecules/VehicleCard/VehicleCard.component";
import { loggedNavItems } from "../../navigation";
import type { MyVehiclesProps } from "./MyVehicles.types";
import "./MyVehicles.styles.css";

const VEHICLES = [
  {
    name: "Toyota Camry",
    year: 2020,
    mileage: 45230,
    lastService: "2026-04-12",
    alert: "Inspection in 3 months",
  },
  {
    name: "Honda CR-V",
    year: 2019,
    mileage: 62150,
    lastService: "2026-03-28",
    alert: "Oil change in 2 weeks",
  },
  {
    name: "Ford F-150",
    year: 2021,
    mileage: 38900,
    lastService: "2026-04-30",
    alert: "Tire rotation due",
  },
];

const PlusIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export default function MyVehicles(_props: MyVehiclesProps) {
  return (
    <PageShell navItems={loggedNavItems}>
      <Box className="my-vehicles">
        <Box className="my-vehicles__header">
          <Typography variant="h2" className="my-vehicles__title">
            My Vehicles
          </Typography>
          <Box className="my-vehicles__actions">
            <Button
              variant="outlined"
              disableElevation
              component={RouterLink}
              to="/create-service-order"
              className="my-vehicles__action my-vehicles__action--ghost">
              Book Mechanic
            </Button>
            <Button
              variant="contained"
              disableElevation
              startIcon={<PlusIcon />}
              className="my-vehicles__action my-vehicles__action--primary">
              Add Vehicle
            </Button>
          </Box>
        </Box>

        <Box className="my-vehicles__grid">
          {VEHICLES.map((vehicle) => (
            <VehicleCard key={vehicle.name} {...vehicle} />
          ))}
        </Box>
      </Box>
    </PageShell>
  );
}
