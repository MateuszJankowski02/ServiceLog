import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import PageShell from "../../components/templates/PageShell/PageShell.component";
import RoleSwitcher from "../../components/molecules/RoleSwitcher/RoleSwitcher.component";
import { loggedNavItems } from "../../navigation";
import type { UserProfileProps } from "./UserProfile.types";
import "./UserProfile.styles.css";

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

export default function UserProfile(_props: UserProfileProps) {
  return (
    <PageShell navItems={loggedNavItems}>
      <Box className="user-profile">
        <RoleSwitcher />
        <Typography variant="h2" className="user-profile__title">
          Profile
        </Typography>
        <Box className="user-profile__grid">
          <Paper
            elevation={0}
            className="user-profile__card user-profile__identity">
            <Box className="user-profile__avatar" aria-hidden="true">
              <AvatarIcon />
            </Box>
            <Typography variant="subtitle1" className="user-profile__name">
              John Doe
            </Typography>
          </Paper>

          <Paper elevation={0} className="user-profile__card">
            <Box className="user-profile__form">
              <Stack spacing={1}>
                <Typography
                  variant="h6"
                  className="user-profile__section-title">
                  Account Information
                </Typography>
                <Stack spacing={0.75}>
                  <Typography
                    variant="body2"
                    className="user-profile__field-label">
                    Email
                  </Typography>
                  <TextField
                    type="email"
                    value="john@example.com"
                    variant="outlined"
                    fullWidth
                    className="user-profile__input"
                  />
                </Stack>
              </Stack>

              <Stack spacing={1}>
                <Typography
                  variant="h6"
                  className="user-profile__section-title">
                  Notifications
                </Typography>
                <Stack spacing={0.5}>
                  <FormControlLabel
                    className="user-profile__checkbox"
                    control={<Checkbox />}
                    label="Service Reminders"
                  />
                  <FormControlLabel
                    className="user-profile__checkbox"
                    control={<Checkbox />}
                    label="Order Updates"
                  />
                </Stack>
              </Stack>

              <Button
                variant="contained"
                disableElevation
                fullWidth
                className="user-profile__submit">
                Save Changes
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </PageShell>
  );
}
