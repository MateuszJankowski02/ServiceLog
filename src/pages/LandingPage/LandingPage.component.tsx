import { Box } from "@mui/material";
import { ArrowRight, Car, Wrench } from "lucide-react";
import LandingHero from "../../components/organisms/LandingHero/LandingHero.component";
import PageShell from "../../components/templates/PageShell/PageShell.component";
import { guestNavItems } from "../../navigation";
import type { LandingPageProps } from "./LandingPage.types";
import "./LandingPage.styles.css";

const features = [
  {
    title: "Track History",
    description: "Maintain comprehensive service records for all your vehicles",
    icon: <Car />,
  },
  {
    title: "Book Mechanic",
    description: "Connect with verified mechanics for reliable service",
    icon: <Wrench />,
  },
  {
    title: "Transfer Vehicle",
    description: "Complete service history transfers with new owners",
    icon: <ArrowRight />,
  },
];

export default function LandingPage(_props: LandingPageProps) {
  return (
    <PageShell navItems={guestNavItems}>
      <Box className="landing-page">
        <LandingHero features={features} />
      </Box>
    </PageShell>
  );
}
