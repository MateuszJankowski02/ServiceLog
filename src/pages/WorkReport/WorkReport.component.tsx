import { useState } from "react";
import type { KeyboardEvent } from "react";
import {
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PageShell from "../../components/templates/PageShell/PageShell.component";
import { loggedNavItems } from "../../navigation";
import type { WorkReportProps } from "./WorkReport.types";
import "./WorkReport.styles.css";

const VEHICLE = {
  vin: "4T1BF1FK5CU123456",
  name: "2020 Toyota Camry",
};

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

const CloseIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true">
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export default function WorkReport(_props: WorkReportProps) {
  const navigate = useNavigate();
  const [mileage, setMileage] = useState("");
  const [partInput, setPartInput] = useState("");
  const [parts, setParts] = useState<string[]>([]);
  const [workDescription, setWorkDescription] = useState("");
  const [cost, setCost] = useState("");

  const addPart = () => {
    const value = partInput.trim();
    if (!value || parts.includes(value)) return;
    setParts([...parts, value]);
    setPartInput("");
  };

  const removePart = (part: string) =>
    setParts(parts.filter((p) => p !== part));

  const handlePartKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addPart();
    }
  };

  const handleSubmit = () => {
    // logika zapisu zostanie dodana w fazie integracji
    navigate(-1);
  };

  return (
    <PageShell navItems={loggedNavItems}>
      <Box className="work-report">
        <Typography variant="h2" className="work-report__title">
          Work Report
        </Typography>

        <Box className="work-report__form">
          <Box className="work-report__vehicle">
            <Typography
              variant="caption"
              className="work-report__vehicle-label">
              VIN
            </Typography>
            <Typography
              variant="body2"
              className="work-report__vehicle-vin">
              {VEHICLE.vin}
            </Typography>
            <Typography
              variant="body2"
              className="work-report__vehicle-name">
              {VEHICLE.name}
            </Typography>
          </Box>

          <Box className="work-report__field">
            <Typography
              variant="body2"
              className="work-report__label work-report__label-required">
              Current Mileage
            </Typography>
            <TextField
              type="number"
              placeholder="45230"
              value={mileage}
              onChange={(e) => setMileage(e.target.value)}
              variant="outlined"
              fullWidth
              slotProps={{ input: { className: "work-report__input" } }}
            />
          </Box>

          <Box className="work-report__field">
            <Typography
              variant="body2"
              className="work-report__label work-report__label-required">
              Parts Replaced
            </Typography>
            <Box className="work-report__parts-row">
              <TextField
                placeholder="Type part name and press Enter"
                value={partInput}
                onChange={(e) => setPartInput(e.target.value)}
                onKeyDown={handlePartKeyDown}
                variant="outlined"
                fullWidth
                slotProps={{ input: { className: "work-report__input" } }}
              />
              <Button
                disableElevation
                disabled={!partInput.trim()}
                onClick={addPart}
                className="work-report__add-part-btn">
                Add
              </Button>
            </Box>
            {parts.length > 0 ? (
              <Box className="work-report__parts-list">
                {parts.map((part) => (
                  <Box key={part} className="work-report__part-chip">
                    {part}
                    <IconButton
                      size="small"
                      aria-label={`Remove ${part}`}
                      onClick={() => removePart(part)}
                      className="work-report__part-remove">
                      <CloseIcon />
                    </IconButton>
                  </Box>
                ))}
              </Box>
            ) : null}
          </Box>

          <Box className="work-report__field">
            <Typography
              variant="body2"
              className="work-report__label work-report__label-required">
              Work Description
            </Typography>
            <TextField
              multiline
              minRows={4}
              placeholder="Describe the work performed in detail..."
              value={workDescription}
              onChange={(e) => setWorkDescription(e.target.value)}
              variant="outlined"
              fullWidth
              slotProps={{ input: { className: "work-report__textarea" } }}
            />
          </Box>

          <Box className="work-report__field">
            <Typography variant="body2" className="work-report__label">
              Cost (optional)
            </Typography>
            <TextField
              type="number"
              placeholder="0.00"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              variant="outlined"
              fullWidth
              slotProps={{ input: { className: "work-report__input" } }}
            />
          </Box>

          <Box className="work-report__field">
            <Typography variant="body2" className="work-report__label">
              Upload Photo (optional)
            </Typography>
            <Box className="work-report__banner">
              Adding a photo of the completed work builds client trust and
              improves your profile rating.
            </Box>
            <Box
              className="work-report__dropzone"
              role="button"
              tabIndex={0}
              aria-label="Upload completed work photo">
              <Box className="work-report__dropzone-icon">
                <UploadIcon />
              </Box>
              <Typography
                variant="body2"
                className="work-report__dropzone-primary">
                Click to upload or drag and drop
              </Typography>
              <Typography
                variant="caption"
                className="work-report__dropzone-secondary">
                PNG, JPG up to 10MB
              </Typography>
            </Box>
          </Box>

          <Box className="work-report__actions">
            <Button
              disableElevation
              onClick={() => navigate(-1)}
              className="work-report__btn work-report__btn--ghost">
              Cancel
            </Button>
            <Button
              disableElevation
              onClick={handleSubmit}
              className="work-report__btn work-report__btn--primary">
              Submit Report
            </Button>
          </Box>
        </Box>
      </Box>
    </PageShell>
  );
}
