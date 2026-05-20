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
import { useNavigate } from "react-router-dom";
import PageShell from "../../components/templates/PageShell/PageShell.component";
import { loggedNavItems } from "../../navigation";
import type {
  AddServiceEntryProps,
  ServiceCategory,
} from "./AddServiceEntry.types";
import "./AddServiceEntry.styles.css";

const CATEGORIES: { value: ServiceCategory; label: string }[] = [
  { value: "inspection", label: "Inspection" },
  { value: "maintenance", label: "Maintenance" },
  { value: "parts", label: "Parts" },
  { value: "repair", label: "Repair" },
];

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

const UploadIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <path d="m17 8-5-5-5 5" />
    <path d="M12 3v12" />
  </svg>
);

export default function AddServiceEntry(_props: AddServiceEntryProps) {
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [mileage, setMileage] = useState("");
  const [category, setCategory] = useState<ServiceCategory | "">("");
  const [serviceName, setServiceName] = useState("");
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState("");

  const handleCategoryChange = (e: SelectChangeEvent<string>) =>
    setCategory(e.target.value as ServiceCategory);

  const handleSave = () => {
    // logika zapisu zostanie dodana w fazie integracji
    navigate(-1);
  };

  return (
    <PageShell navItems={loggedNavItems}>
      <Box className="add-entry">
        <Typography variant="h2" className="add-entry__title">
          Add Service Entry
        </Typography>

        <Box className="add-entry__form">
          <Box className="add-entry__row">
            <Box className="add-entry__field">
              <Typography variant="body2" className="add-entry__label">
                Date
              </Typography>
              <Box className="add-entry__date-wrapper">
                <TextField
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  variant="outlined"
                  fullWidth
                  slotProps={{
                    input: {
                      className: "add-entry__input add-entry__date",
                    },
                  }}
                />
                <Box className="add-entry__date-icon" aria-hidden="true">
                  <CalendarIcon />
                </Box>
              </Box>
            </Box>
            <Box className="add-entry__field">
              <Typography variant="body2" className="add-entry__label">
                Mileage
              </Typography>
              <TextField
                type="number"
                placeholder="45230"
                value={mileage}
                onChange={(e) => setMileage(e.target.value)}
                variant="outlined"
                fullWidth
                slotProps={{ input: { className: "add-entry__input" } }}
              />
            </Box>
          </Box>

          <Box className="add-entry__field">
            <Typography variant="body2" className="add-entry__label">
              Category
            </Typography>
            <Select
              value={category}
              onChange={handleCategoryChange}
              displayEmpty
              className="add-entry__select"
              renderValue={(value) => {
                if (!value) return " ";
                return CATEGORIES.find((c) => c.value === value)?.label ?? " ";
              }}>
              {CATEGORIES.map((c) => (
                <MenuItem key={c.value} value={c.value}>
                  {c.label}
                </MenuItem>
              ))}
            </Select>
          </Box>

          <Box className="add-entry__field">
            <Typography variant="body2" className="add-entry__label">
              Service Name
            </Typography>
            <TextField
              placeholder="Oil Change"
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
              variant="outlined"
              fullWidth
              slotProps={{ input: { className: "add-entry__input" } }}
            />
          </Box>

          <Box className="add-entry__field">
            <Typography variant="body2" className="add-entry__label">
              Description
            </Typography>
            <TextField
              multiline
              minRows={4}
              placeholder="Describe the service performed..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              variant="outlined"
              fullWidth
              slotProps={{ input: { className: "add-entry__textarea" } }}
            />
          </Box>

          <Box className="add-entry__field">
            <Typography variant="body2" className="add-entry__label">
              Cost (optional)
            </Typography>
            <TextField
              type="number"
              placeholder="0.00"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              variant="outlined"
              fullWidth
              slotProps={{ input: { className: "add-entry__input" } }}
            />
          </Box>

          <Box className="add-entry__field">
            <Typography variant="body2" className="add-entry__label">
              Upload Invoice / Photo
            </Typography>
            <Box
              className="add-entry__dropzone"
              role="button"
              tabIndex={0}
              aria-label="Upload invoice or photo">
              <Box className="add-entry__dropzone-icon">
                <UploadIcon />
              </Box>
              <Typography
                variant="body2"
                className="add-entry__dropzone-primary">
                Click to upload or drag and drop
              </Typography>
              <Typography
                variant="caption"
                className="add-entry__dropzone-secondary">
                PDF, PNG, JPG up to 10MB
              </Typography>
            </Box>
          </Box>

          <Box className="add-entry__actions">
            <Button
              disableElevation
              onClick={() => navigate(-1)}
              className="add-entry__btn add-entry__btn--ghost">
              Cancel
            </Button>
            <Button
              disableElevation
              onClick={handleSave}
              className="add-entry__btn add-entry__btn--primary">
              Save Entry
            </Button>
          </Box>
        </Box>
      </Box>
    </PageShell>
  );
}
