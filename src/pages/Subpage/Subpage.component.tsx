import { Box, Paper, Typography } from "@mui/material";
import PageShell from "../../components/templates/PageShell/PageShell.component";
import { loggedNavItems } from "../../navigation";
import type { SubpageProps } from "./Subpage.types";
import "./Subpage.styles.css";

export default function Subpage({ title }: SubpageProps) {
  return (
    <PageShell navItems={loggedNavItems}>
      <Box
        className="subpage"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Paper elevation={0} className="subpage__card">
          <Typography variant="h2" className="subpage__title">
            {title}
          </Typography>
        </Paper>
      </Box>
    </PageShell>
  );
}
