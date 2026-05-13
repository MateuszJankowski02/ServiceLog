import {
  Box,
  Button,
  Chip,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import PageShell from "../../components/templates/PageShell/PageShell.component";
import { navItems } from "../../navigation";
import type { MechanicProfileProps } from "./MechanicProfile.types";
import "./MechanicProfile.styles.css";

const SPECIALIZATIONS = ["General Repair", "Diagnostics", "Oil Changes"];

const AvatarIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#3b82f6"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </svg>
);

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
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="m8 12 3 3 5-6" />
  </svg>
);

export default function MechanicProfile(_props: MechanicProfileProps) {
  return (
    <PageShell navItems={navItems}>
      <Box className="mechanic-profile">
        <Typography variant="h2" className="mechanic-profile__title">
          Profile
        </Typography>
        <Box className="mechanic-profile__grid">
          <Paper
            elevation={0}
            className="mechanic-profile__card mechanic-profile__identity">
            <Box className="mechanic-profile__avatar" aria-hidden="true">
              <AvatarIcon />
            </Box>
            <Typography variant="subtitle1" className="mechanic-profile__name">
              Mike&apos;s Auto Shop
            </Typography>
            <Box className="mechanic-profile__verified">
              <VerifiedIcon />
              <Typography variant="caption">Verified</Typography>
            </Box>
          </Paper>

          <Paper elevation={0} className="mechanic-profile__card">
            <Box className="mechanic-profile__form">
              <Typography
                variant="h6"
                className="mechanic-profile__section-title">
                Account Information
              </Typography>

              <Stack spacing={2}>
                <Stack spacing={0.75}>
                  <Typography
                    variant="body2"
                    className="mechanic-profile__field-label">
                    Email
                  </Typography>
                  <TextField
                    type="email"
                    value="mike@autoshop.com"
                    variant="outlined"
                    fullWidth
                    className="mechanic-profile__input"
                  />
                </Stack>

                <Stack spacing={0.75}>
                  <Typography
                    variant="body2"
                    className="mechanic-profile__field-label">
                    Workshop Name
                  </Typography>
                  <TextField
                    value="Mike's Auto Shop"
                    variant="outlined"
                    fullWidth
                    className="mechanic-profile__input"
                  />
                </Stack>

                <Stack spacing={0.75}>
                  <Typography
                    variant="body2"
                    className="mechanic-profile__field-label">
                    Address
                  </Typography>
                  <TextField
                    value="123 Main St, Springfield"
                    variant="outlined"
                    fullWidth
                    className="mechanic-profile__input"
                  />
                </Stack>

                <Stack spacing={0.75}>
                  <Typography
                    variant="body2"
                    className="mechanic-profile__field-label">
                    Phone
                  </Typography>
                  <TextField
                    type="tel"
                    value="(555) 123-4567"
                    variant="outlined"
                    fullWidth
                    className="mechanic-profile__input mechanic-profile__input--mono"
                  />
                </Stack>

                <Stack spacing={1}>
                  <Typography
                    variant="body2"
                    className="mechanic-profile__field-label">
                    Specializations
                  </Typography>
                  <Box className="mechanic-profile__chips">
                    {SPECIALIZATIONS.map((spec) => (
                      <Chip
                        key={spec}
                        label={spec}
                        size="small"
                        className="mechanic-profile__chip"
                      />
                    ))}
                    <IconButton
                      size="small"
                      aria-label="Add specialization"
                      className="mechanic-profile__chip-add">
                      <PlusIcon />
                    </IconButton>
                  </Box>
                </Stack>
              </Stack>

              <Button
                variant="contained"
                disableElevation
                fullWidth
                className="mechanic-profile__submit">
                Save Changes
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </PageShell>
  );
}
