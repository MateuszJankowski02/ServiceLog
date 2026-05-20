import { useMemo, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import PageShell from "../../components/templates/PageShell/PageShell.component";
import { loggedNavItems } from "../../navigation";
import type {
  CategoryFilter,
  ServiceEntry,
  VehicleHistoryProps,
} from "./VehicleHistory.types";
import "./VehicleHistory.styles.css";

const VEHICLE = {
  name: "Toyota Camry",
  vin: "4T1BF1FK5CU123456",
  currentMileage: 45230,
};

const ENTRIES: ServiceEntry[] = [
  {
    id: "e1",
    category: "maintenance",
    name: "Oil Change",
    date: "2026-04-12",
    mileage: 45230,
    provider: "Owner",
    verifiedMechanic: false,
    cost: 65,
  },
  {
    id: "e2",
    category: "inspection",
    name: "Annual Inspection",
    date: "2026-03-05",
    mileage: 43100,
    provider: "Mike's Auto Shop",
    verifiedMechanic: true,
    cost: 120,
  },
  {
    id: "e3",
    category: "parts",
    name: "Brake Pads Replacement",
    date: "2026-01-18",
    mileage: 41500,
    provider: "Mike's Auto Shop",
    verifiedMechanic: true,
    cost: 380,
  },
  {
    id: "e4",
    category: "maintenance",
    name: "Tire Rotation",
    date: "2025-12-10",
    mileage: 40200,
    provider: "Owner",
    verifiedMechanic: false,
    cost: 45,
  },
  {
    id: "e5",
    category: "repair",
    name: "Coolant Hose Replacement",
    date: "2025-10-22",
    mileage: 38600,
    provider: "Elite Motors",
    verifiedMechanic: true,
    cost: 210,
  },
];

const FILTERS: { value: CategoryFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "inspection", label: "Inspection" },
  { value: "parts", label: "Parts" },
  { value: "repair", label: "Repair" },
];

const formatMileage = (value: number): string =>
  value.toLocaleString("en-US").replace(/,/g, " ");

const formatMileageWithCommas = (value: number): string =>
  value.toLocaleString("en-US");

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

const VerifiedIcon = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="m8 12 3 3 5-6" />
  </svg>
);

export default function VehicleHistory(_props: VehicleHistoryProps) {
  const [filter, setFilter] = useState<CategoryFilter>("all");

  const filtered = useMemo(
    () =>
      filter === "all"
        ? ENTRIES
        : ENTRIES.filter((e) => e.category === filter),
    [filter],
  );

  return (
    <PageShell navItems={loggedNavItems}>
      <Box className="vehicle-history">
        <Box className="vehicle-history__header">
          <Box>
            <Typography variant="h2" className="vehicle-history__title">
              {VEHICLE.name}
            </Typography>
            <Typography
              variant="body2"
              className="vehicle-history__vin">
              VIN: {VEHICLE.vin}
            </Typography>
          </Box>
          <Box className="vehicle-history__mileage">
            <Typography
              variant="caption"
              className="vehicle-history__mileage-label">
              Current Mileage
            </Typography>
            <Typography
              variant="h5"
              className="vehicle-history__mileage-value">
              {formatMileageWithCommas(VEHICLE.currentMileage)}
            </Typography>
          </Box>
        </Box>

        <Box className="vehicle-history__filters">
          <Box className="vehicle-history__filter-chips">
            {FILTERS.map((f) => {
              const isActive = filter === f.value;
              const className = isActive
                ? "vehicle-history__chip vehicle-history__chip--active"
                : "vehicle-history__chip";
              return (
                <Button
                  key={f.value}
                  disableElevation
                  onClick={() => setFilter(f.value)}
                  className={className}>
                  {f.label}
                </Button>
              );
            })}
          </Box>
          <Button
            disableElevation
            component={RouterLink}
            to="/add-service-entry"
            startIcon={<PlusIcon />}
            className="vehicle-history__add-btn">
            Add Entry
          </Button>
        </Box>

        <Box className="vehicle-history__list">
          {filtered.length === 0 ? (
            <Box className="vehicle-history__empty">
              No service entries in this category yet.
            </Box>
          ) : (
            filtered.map((entry) => (
              <Box key={entry.id} className="vehicle-history__entry">
                <Box className="vehicle-history__entry-main">
                  <Typography
                    variant="subtitle1"
                    className="vehicle-history__entry-name">
                    {entry.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="vehicle-history__entry-meta">
                    {entry.date}
                    {" · "}
                    <Box
                      component="span"
                      className="vehicle-history__entry-meta-mileage">
                      {formatMileage(entry.mileage)} mi
                    </Box>
                  </Typography>
                  <Box className="vehicle-history__entry-provider">
                    {entry.provider}
                    {entry.verifiedMechanic ? (
                      <Box className="vehicle-history__verified-chip">
                        <VerifiedIcon />
                        Verified Mechanic
                      </Box>
                    ) : null}
                  </Box>
                </Box>
                <Box className="vehicle-history__entry-cost">
                  ${entry.cost}
                </Box>
              </Box>
            ))
          )}
        </Box>
      </Box>
    </PageShell>
  );
}
