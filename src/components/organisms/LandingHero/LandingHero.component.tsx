import { Box, Button, Stack, Typography } from "@mui/material";
import FeatureCard from "../../molecules/FeatureCard/FeatureCard.component";
import type { LandingHeroProps } from "./LandingHero.types";
import "./LandingHero.styles.css";

export default function LandingHero({ features }: LandingHeroProps) {
  return (
    <Box className="landing-hero">
      <Stack spacing={2} alignItems="center" className="landing-hero__intro">
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
      </Stack>

      <Box className="landing-hero__grid">
        {features.map((feature) => (
          <Box key={feature.title} className="landing-hero__grid-item">
            <FeatureCard {...feature} />
          </Box>
        ))}
      </Box>

      <Box className="landing-hero__actions">
        <Button
          variant="contained"
          className="landing-hero__button landing-hero__button--primary"
          disableElevation>
          Sign Up
        </Button>
        <Button
          variant="outlined"
          className="landing-hero__button landing-hero__button--ghost"
          disableElevation>
          Log In
        </Button>
      </Box>
    </Box>
  );
}
