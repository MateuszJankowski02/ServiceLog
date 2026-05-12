import { Box, Paper, Stack, Typography } from "@mui/material";
import type { FeatureCardProps } from "./FeatureCard.types";
import "./FeatureCard.styles.css";

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <Paper elevation={0} className="feature-card">
      <Stack spacing={2} alignItems="center" className="feature-card__content">
        <Box className="feature-card__icon">
          <Box
            component="img"
            src={icon}
            alt=""
            className="feature-card__icon-image"
          />
        </Box>
        <Typography variant="h6" className="feature-card__title">
          {title}
        </Typography>
        <Typography variant="body2" className="feature-card__description">
          {description}
        </Typography>
      </Stack>
    </Paper>
  );
}
