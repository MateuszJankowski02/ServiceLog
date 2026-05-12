import { Box } from "@mui/material";
import LandingHero from "../../components/organisms/LandingHero/LandingHero.component";
import PageShell from "../../components/templates/PageShell/PageShell.component";
import { navItems } from "../../navigation";
import type { LandingPageProps } from "./LandingPage.types";
import "./LandingPage.styles.css";

const features = [
  {
    title: "Track History",
    description: "Maintain comprehensive service records for all your vehicles",
    icon: "https://www.figma.com/api/mcp/asset/db5786be-9ed9-41aa-9208-1b01f3402d0d",
  },
  {
    title: "Book Mechanic",
    description: "Connect with verified mechanics for reliable service",
    icon: "https://www.figma.com/api/mcp/asset/f3e1ad6a-f19a-41f2-aad0-39f194d0efe1",
  },
  {
    title: "Transfer Vehicle",
    description: "Complete service history transfers with new owners",
    icon: "https://www.figma.com/api/mcp/asset/87ed690c-f6ab-4785-ad0d-e38a06ce9ba9",
  },
];

export default function LandingPage(_props: LandingPageProps) {
  return (
    <PageShell navItems={navItems}>
      <Box className="landing-page">
        <LandingHero features={features} />
      </Box>
    </PageShell>
  );
}
