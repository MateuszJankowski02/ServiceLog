export const navItems = [
  { label: "Login/Register", to: "/login-register" },
  { label: "Mechanic", to: "/mechanic" },
  { label: "User", to: "/user" },
] as const;

export type NavItem = (typeof navItems)[number];
