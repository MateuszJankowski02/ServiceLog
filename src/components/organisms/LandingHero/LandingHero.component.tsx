import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import FeatureCard from "../../molecules/FeatureCard/FeatureCard.component";
import type { LandingHeroProps } from "./LandingHero.types";
import "./LandingHero.styles.css";

export default function LandingHero({ features }: LandingHeroProps) {
  return (
    <Box className="landing-hero">
      <Box
        className="landing-hero__intro"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}>
        <Typography variant="h1" className="landing-hero__title">
          ServiceLog
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          className="landing-hero__subtitle">
          Complete vehicle service history tracking and mechanic booking
          platform
        </Typography>
      </Box>

      <Box className="landing-hero__grid">
        {features.map((feature) => (
          <Box key={feature.title} className="landing-hero__grid-item">
            <FeatureCard {...feature} />
          </Box>
        ))}
      </Box>

      <Box className="landing-hero__actions">
        <Button
          component={RouterLink}
          to="/login-register?mode=register"
          variant="contained"
          className="landing-hero__button landing-hero__button--primary"
          disableElevation>
          Sign Up
        </Button>
        <Button
          component={RouterLink}
          to="/login-register?mode=login"
          variant="outlined"
          className="landing-hero__button landing-hero__button--ghost"
          disableElevation>
          Log In
        </Button>
      </Box>
    </Box>
  );
}
