import { useState } from "react";
import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";
import PageShell from "../../components/templates/PageShell/PageShell.component";
import { loggedNavItems } from "../../navigation";
import type {
  CreateServiceOrderProps,
  Mechanic,
  Vehicle,
} from "./CreateServiceOrder.types";
import "./CreateServiceOrder.styles.css";

const VEHICLES: Vehicle[] = [
  { id: "v1", label: "2020 Toyota Camry" },
  { id: "v2", label: "2019 Honda CR-V" },
  { id: "v3", label: "2021 Ford F-150" },
];

const MECHANICS: Mechanic[] = [
  { id: "m1", name: "Mike's Auto Shop", specialty: "General Repair", rating: 4.8 },
  { id: "m2", name: "QuickFix Garage", specialty: "Oil Changes", rating: 4.6 },
  { id: "m3", name: "Elite Motors", specialty: "Import Specialists", rating: 4.9 },
  { id: "m4", name: "City Auto Service", specialty: "Diagnostics", rating: 4.7 },
];

const STEPS = ["Select Vehicle", "Choose Mechanic", "Schedule"] as const;

const StarIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true">
    <path d="M12 2.5l2.92 5.92 6.54.95-4.73 4.61 1.12 6.51L12 17.77l-5.85 3.08 1.12-6.51-4.73-4.61 6.54-.95L12 2.5Z" />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true">
    <path d="m5 12 5 5 9-11" />
  </svg>
);

const CalendarIcon = () => (
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
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  </svg>
);

export default function CreateServiceOrder(_props: CreateServiceOrderProps) {
  const [step, setStep] = useState(0);
  const [vehicleId, setVehicleId] = useState("");
  const [mechanicId, setMechanicId] = useState("");
  const [date, setDate] = useState("");
  const [problem, setProblem] = useState("");

  const canContinue =
    (step === 0 && vehicleId) ||
    (step === 1 && mechanicId) ||
    (step === 2 && date && problem.trim().length > 0);

  const handleVehicleChange = (e: SelectChangeEvent<string>) =>
    setVehicleId(e.target.value);

  const handleSubmit = () => {
    // logika dodana w pózniejszej fazie — na razie tylko reset UI
    setStep(0);
    setVehicleId("");
    setMechanicId("");
    setDate("");
    setProblem("");
  };

  return (
    <PageShell navItems={loggedNavItems}>
      <Box className="create-order">
        <Typography variant="h2" className="create-order__title">
          Create Service Order
        </Typography>

        <Box className="create-order__stepper">
          {STEPS.map((label, index) => {
            const state =
              index < step ? "complete" : index === step ? "active" : "upcoming";
            const barClass =
              state === "upcoming"
                ? "create-order__step-bar"
                : `create-order__step-bar create-order__step-bar--${state}`;
            const labelClass =
              state === "upcoming"
                ? "create-order__step-label"
                : "create-order__step-label create-order__step-label--active";
            return (
              <Box key={label} className="create-order__step">
                <Box className={barClass} />
                <Typography variant="body2" className={labelClass}>
                  {label}
                </Typography>
              </Box>
            );
          })}
        </Box>

        <Box className="create-order__form">
          {step === 0 ? (
            <Box className="create-order__field">
              <Typography
                variant="body2"
                className="create-order__field-label">
                Select Vehicle
              </Typography>
              <Select
                value={vehicleId}
                onChange={handleVehicleChange}
                displayEmpty
                className="create-order__select"
                renderValue={(value) => {
                  if (!value) return " ";
                  const v = VEHICLES.find((x) => x.id === value);
                  return v?.label ?? " ";
                }}>
                {VEHICLES.map((v) => (
                  <MenuItem key={v.id} value={v.id}>
                    {v.label}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          ) : null}

          {step === 1 ? (
            <Box className="create-order__field">
              <Typography
                variant="body2"
                className="create-order__field-label"
                sx={{ textAlign: "center" }}>
                Select Mechanic
              </Typography>
              <Box className="create-order__mechanics">
                {MECHANICS.map((m) => {
                  const selected = mechanicId === m.id;
                  const className = selected
                    ? "create-order__mechanic create-order__mechanic--selected"
                    : "create-order__mechanic";
                  return (
                    <Box
                      key={m.id}
                      className={className}
                      onClick={() => setMechanicId(m.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setMechanicId(m.id);
                        }
                      }}>
                      <Box className="create-order__mechanic-check">
                        <CheckIcon />
                      </Box>
                      <Typography
                        variant="subtitle2"
                        className="create-order__mechanic-name">
                        {m.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="create-order__mechanic-specialty">
                        {m.specialty}
                      </Typography>
                      <Box className="create-order__mechanic-rating">
                        <Box className="create-order__mechanic-rating-icon">
                          <StarIcon />
                        </Box>
                        {m.rating.toFixed(1)}
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          ) : null}

          {step === 2 ? (
            <>
              <Box className="create-order__field">
                <Typography
                  variant="body2"
                  className="create-order__field-label">
                  Preferred Date
                </Typography>
                <Box className="create-order__date-wrapper">
                  <TextField
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    variant="outlined"
                    fullWidth
                    slotProps={{
                      input: {
                        className: "create-order__input create-order__date",
                      },
                    }}
                  />
                  <Box className="create-order__date-icon" aria-hidden="true">
                    <CalendarIcon />
                  </Box>
                </Box>
              </Box>
              <Box className="create-order__field">
                <Typography
                  variant="body2"
                  className="create-order__field-label">
                  Problem Description
                </Typography>
                <TextField
                  multiline
                  minRows={4}
                  placeholder="Describe the issue with your vehicle..."
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                  variant="outlined"
                  fullWidth
                  slotProps={{
                    input: { className: "create-order__textarea" },
                  }}
                />
              </Box>
            </>
          ) : null}
        </Box>

        <Box className="create-order__actions">
          {step > 0 ? (
            <Button
              disableElevation
              onClick={() => setStep(step - 1)}
              className="create-order__btn create-order__btn--ghost">
              Back
            </Button>
          ) : null}
          {step < STEPS.length - 1 ? (
            <Button
              disableElevation
              disabled={!canContinue}
              onClick={() => setStep(step + 1)}
              className="create-order__btn create-order__btn--primary">
              Continue
            </Button>
          ) : (
            <Button
              disableElevation
              disabled={!canContinue}
              onClick={handleSubmit}
              className="create-order__btn create-order__btn--primary">
              Submit Order
            </Button>
          )}
        </Box>
      </Box>
    </PageShell>
  );
}
