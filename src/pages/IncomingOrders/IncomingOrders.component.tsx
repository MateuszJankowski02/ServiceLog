import { Box, Typography } from "@mui/material";
import PageShell from "../../components/templates/PageShell/PageShell.component";
import IncomingOrderCard from "../../components/molecules/IncomingOrderCard/IncomingOrderCard.component";
import type { IncomingOrder } from "../../components/molecules/IncomingOrderCard/IncomingOrderCard.types";
import { loggedNavItems } from "../../navigation";
import type { IncomingOrdersProps } from "./IncomingOrders.types";
import "./IncomingOrders.styles.css";

const ORDERS: IncomingOrder[] = [
  {
    id: "in-1",
    vehicle: "2020 Toyota Camry",
    owner: "John Smith",
    problem: "Engine making unusual noise when accelerating",
    proposedDate: "2026-05-10",
  },
  {
    id: "in-2",
    vehicle: "2018 BMW 3 Series",
    owner: "Sarah Johnson",
    problem: "Check engine light is on, car running rough",
    proposedDate: "2026-05-05",
    urgent: true,
  },
  {
    id: "in-3",
    vehicle: "2021 Ford F-150",
    owner: "Mike Davis",
    problem: "Brake pads need replacement",
    proposedDate: "2026-05-12",
  },
  {
    id: "in-4",
    vehicle: "2019 Honda Accord",
    owner: "Emily Chen",
    problem: "Oil change and tire rotation needed",
    proposedDate: "2026-05-05",
    urgent: true,
  },
];

export default function IncomingOrders(_props: IncomingOrdersProps) {
  return (
    <PageShell navItems={loggedNavItems}>
      <Box className="incoming-orders">
        <Typography variant="h2" className="incoming-orders__title">
          Incoming Orders
        </Typography>
        <Box className="incoming-orders__grid">
          {ORDERS.map((order) => (
            <IncomingOrderCard key={order.id} {...order} />
          ))}
        </Box>
      </Box>
    </PageShell>
  );
}
