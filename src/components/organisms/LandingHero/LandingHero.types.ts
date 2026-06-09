import type { ReactNode } from "react";

export type FeatureItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

export type LandingHeroProps = {
  features: FeatureItem[];
};
