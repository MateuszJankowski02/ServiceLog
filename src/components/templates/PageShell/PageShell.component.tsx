import { Box, Container } from "@mui/material";
import TopNav from "../../molecules/TopNav/TopNav.component";
import type { PageShellProps } from "./PageShell.types";
import "./PageShell.styles.css";

export default function PageShell({ navItems, children }: PageShellProps) {
  return (
    <Box className="page-shell">
      <TopNav items={navItems} />
      <Container
        maxWidth={false}
        disableGutters
        className="page-shell__content">
        {children}
      </Container>
    </Box>
  );
}
