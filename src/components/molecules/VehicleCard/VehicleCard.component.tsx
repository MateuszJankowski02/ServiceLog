import { Box, Button, Paper, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import type { VehicleCardProps } from "./VehicleCard.types";
import "./VehicleCard.styles.css";

const CarIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true">
    <path d="M5 17h14M3 12h18M6 7h12l3 5v5H3v-5l3-5Z" />
    <circle cx="7.5" cy="17.5" r="1.6" />
    <circle cx="16.5" cy="17.5" r="1.6" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

const formatMileage = (value: number): string =>
  value.toLocaleString("en-US").replace(/,/g, " ");

export default function VehicleCard({
  name,
  year,
  mileage,
  lastService,
  alert,
}: VehicleCardProps) {
  return (
    <Paper elevation={0} className="vehicle-card">
      <Box className="vehicle-card__icon" aria-hidden="true">
        <CarIcon />
      </Box>
      <Box>
        <Typography variant="subtitle1" className="vehicle-card__name">
          {name}
        </Typography>
        <Typography variant="body2" className="vehicle-card__year">
          {year}
        </Typography>
      </Box>
      <Box className="vehicle-card__mileage">
        <Typography variant="caption" className="vehicle-card__mileage-label">
          Mileage
        </Typography>
        <Typography variant="h6" className="vehicle-card__mileage-value">
          {formatMileage(mileage)}
        </Typography>
      </Box>
      <Typography variant="body2" className="vehicle-card__last-service">
        Last service: {lastService}
      </Typography>
      {alert ? <Box className="vehicle-card__alert">{alert}</Box> : null}
      <Button
        disableElevation
        component={RouterLink}
        to="/vehicle-history"
        endIcon={<ArrowIcon />}
        className="vehicle-card__history-btn">
        View History
      </Button>
    </Paper>
  );
}
