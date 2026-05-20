import { useMemo, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import PageShell from "../../components/templates/PageShell/PageShell.component";
import { loggedNavItems } from "../../navigation";
import type { MyOrdersProps, Order, OrderStatus } from "./MyOrders.types";
import "./MyOrders.styles.css";

const ORDERS: Order[] = [
  {
    id: "ord-1",
    vehicle: "2020 Toyota Camry",
    mechanic: "Mike's Auto Shop",
    date: "2026-05-15",
    status: "active",
  },
  {
    id: "ord-2",
    vehicle: "2021 Ford F-150",
    mechanic: "Elite Motors",
    date: "2026-05-20",
    status: "active",
  },
  {
    id: "ord-3",
    vehicle: "2019 Honda CR-V",
    mechanic: "QuickFix Garage",
    date: "2026-04-28",
    status: "completed",
    report: {
      mileage: 62150,
      partsReplaced: ["Oil Filter", "5W-30 Oil", "Drain Plug Washer"],
      workPerformed:
        "Performed full synthetic oil change (5W-30) and replaced OEM oil filter. Inspected and topped off all fluid levels — brake fluid, coolant, power steering, and washer fluid. Checked tire pressure and adjusted to manufacturer spec. Visual inspection of belts, hoses, and undercarriage — no issues found. Reset oil life monitor and updated service interval.",
      cost: 65,
    },
  },
];

const formatMileage = (value: number): string =>
  value.toLocaleString("en-US").replace(/,/g, " ");

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

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ transform: open ? "rotate(180deg)" : undefined }}
    aria-hidden="true">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default function MyOrders(_props: MyOrdersProps) {
  const [tab, setTab] = useState<OrderStatus>("active");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = useMemo(
    () => ORDERS.filter((o) => o.status === tab),
    [tab],
  );

  return (
    <PageShell navItems={loggedNavItems}>
      <Box className="my-orders">
        <Box className="my-orders__header">
          <Typography variant="h2" className="my-orders__title">
            My Orders
          </Typography>
          <Button
            disableElevation
            component={RouterLink}
            to="/create-service-order"
            startIcon={<PlusIcon />}
            className="my-orders__new-btn">
            New Order
          </Button>
        </Box>

        <Box className="my-orders__tabs">
          <Button
            disableElevation
            onClick={() => setTab("active")}
            className={`my-orders__tab ${tab === "active" ? "my-orders__tab--active" : ""}`}>
            Active
          </Button>
          <Button
            disableElevation
            onClick={() => setTab("completed")}
            className={`my-orders__tab ${tab === "completed" ? "my-orders__tab--active" : ""}`}>
            Completed
          </Button>
        </Box>

        <Box className="my-orders__table">
          <Box className="my-orders__row my-orders__row--header">
            <Box>Vehicle</Box>
            <Box>Mechanic</Box>
            <Box>Date</Box>
            <Box>Status</Box>
            <Box>Actions</Box>
          </Box>

          {filtered.length === 0 ? (
            <Box className="my-orders__empty">No orders to show.</Box>
          ) : (
            filtered.map((order) => {
              const isOpen = expanded === order.id;
              return (
                <Box key={order.id}>
                  <Box className="my-orders__row my-orders__row--data">
                    <Box>{order.vehicle}</Box>
                    <Box>{order.mechanic}</Box>
                    <Box style={{ color: "#9ca3af" }}>{order.date}</Box>
                    <Box>
                      <Box
                        className={`my-orders__status-chip my-orders__status-chip--${order.status}`}>
                        {order.status === "completed" ? "Completed" : "Active"}
                      </Box>
                    </Box>
                    <Box>
                      {order.report ? (
                        <Button
                          disableElevation
                          onClick={() => setExpanded(isOpen ? null : order.id)}
                          startIcon={<ChevronIcon open={isOpen} />}
                          className="my-orders__toggle">
                          {isOpen ? "Hide Report" : "Show Report"}
                        </Button>
                      ) : null}
                    </Box>
                  </Box>

                  {isOpen && order.report ? (
                    <Box className="my-orders__report">
                      <Box className="my-orders__report-field my-orders__report-field--mileage">
                        <Typography
                          variant="caption"
                          className="my-orders__report-label">
                          Mileage
                        </Typography>
                        <Typography
                          variant="body2"
                          className="my-orders__report-value my-orders__report-value--mono">
                          {formatMileage(order.report.mileage)}
                        </Typography>
                      </Box>
                      <Box className="my-orders__report-field my-orders__report-field--cost">
                        <Typography
                          variant="caption"
                          className="my-orders__report-label">
                          Cost
                        </Typography>
                        <Typography
                          variant="body2"
                          className="my-orders__report-value">
                          ${order.report.cost}
                        </Typography>
                      </Box>
                      <Box className="my-orders__report-field my-orders__report-field--parts">
                        <Typography
                          variant="caption"
                          className="my-orders__report-label">
                          Parts Replaced
                        </Typography>
                        <Box className="my-orders__report-chips">
                          {order.report.partsReplaced.map((part) => (
                            <Box key={part} className="my-orders__report-chip">
                              {part}
                            </Box>
                          ))}
                        </Box>
                      </Box>
                      <Box className="my-orders__report-field my-orders__report-field--work">
                        <Typography
                          variant="caption"
                          className="my-orders__report-label">
                          Work Performed
                        </Typography>
                        <Typography
                          variant="body2"
                          className="my-orders__report-value">
                          {order.report.workPerformed}
                        </Typography>
                      </Box>
                    </Box>
                  ) : null}
                </Box>
              );
            })
          )}
        </Box>
      </Box>
    </PageShell>
  );
}
