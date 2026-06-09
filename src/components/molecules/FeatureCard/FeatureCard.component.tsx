import { Box, Paper, Typography } from "@mui/material";
import type { FeatureCardProps } from "./FeatureCard.types";
import "./FeatureCard.styles.css";

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <Paper elevation={0} className="feature-card">
      <Box
        className="feature-card__content"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}>
        <Box className="feature-card__icon">
          <Box className="feature-card__icon-image" aria-hidden="true">
            {icon}
          </Box>
        </Box>
        <Typography variant="h6" className="feature-card__title">
          {title}
        </Typography>
        <Typography variant="body2" className="feature-card__description">
          {description}
        </Typography>
      </Box>
    </Paper>
  );
}
