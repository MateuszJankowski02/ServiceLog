import { Box, Button, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import type { IncomingOrderCardProps } from "./IncomingOrderCard.types";
import "./IncomingOrderCard.styles.css";

const AlertIcon = () => (
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
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v5M12 16h.01" />
  </svg>
);

export default function IncomingOrderCard({
  id,
  vehicle,
  owner,
  problem,
  proposedDate,
  urgent,
  onAccept,
  onDecline,
}: IncomingOrderCardProps) {
  const navigate = useNavigate();
  const cardClass = urgent
    ? "incoming-order-card incoming-order-card--urgent"
    : "incoming-order-card";

  const handleAccept = () => {
    onAccept?.(id);
    navigate("/work-report");
  };

  return (
    <Paper elevation={0} className={cardClass}>
      {urgent ? (
        <Box className="incoming-order-card__urgent-chip">
          <AlertIcon />
          URGENT - Same Day
        </Box>
      ) : null}

      <Box>
        <Typography variant="subtitle1" className="incoming-order-card__vehicle">
          {vehicle}
        </Typography>
        <Typography variant="body2" className="incoming-order-card__owner">
          Owner: {owner}
        </Typography>
      </Box>

      <Box className="incoming-order-card__problem">
        <Typography
          variant="caption"
          className="incoming-order-card__problem-label">
          Problem
        </Typography>
        <Typography
          variant="body2"
          className="incoming-order-card__problem-text">
          {problem}
        </Typography>
      </Box>

      <Typography variant="body2" className="incoming-order-card__date">
        Proposed date: {proposedDate}
      </Typography>

      <Box className="incoming-order-card__actions">
        <Button
          disableElevation
          onClick={() => onDecline?.(id)}
          className="incoming-order-card__btn incoming-order-card__btn--decline">
          Decline
        </Button>
        <Button
          disableElevation
          onClick={handleAccept}
          className="incoming-order-card__btn incoming-order-card__btn--accept">
          Accept
        </Button>
      </Box>
    </Paper>
  );
}
