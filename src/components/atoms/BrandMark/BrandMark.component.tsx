import { Typography } from "@mui/material";
import type { BrandMarkProps } from "./BrandMark.types";
import "./BrandMark.styles.css";

export default function BrandMark({ className, ...props }: BrandMarkProps) {
  const combinedClassName = className
    ? `brand-mark ${className}`
    : "brand-mark";

  return (
    <Typography variant="subtitle1" className={combinedClassName} {...props}>
      ServiceLog
    </Typography>
  );
}
