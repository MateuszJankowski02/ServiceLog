import type { ReactNode } from "react";
import type { NavItem } from "../../../navigation";

export type PageShellProps = {
  navItems: NavItem[];
  children: ReactNode;
};
