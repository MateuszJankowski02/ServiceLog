export type NavItem = {
  label: string;
  to: string;
};

export const guestNavItems: NavItem[] = [
  { label: "Login / Register", to: "/login-register" },
];

export const loggedNavItems: NavItem[] = [
  { label: "My Vehicles", to: "/my-vehicles" },
  { label: "My Orders", to: "/my-orders" },
  { label: "Incoming Orders", to: "/incoming-orders" },
  { label: "Profile", to: "/user" },
  { label: "Log Out", to: "/" },
];

export const allRoutes: NavItem[] = [
  { label: "Login / Register", to: "/login-register" },
  { label: "My Vehicles", to: "/my-vehicles" },
  { label: "My Orders", to: "/my-orders" },
  { label: "Incoming Orders", to: "/incoming-orders" },
  { label: "User Profile", to: "/user" },
  { label: "Mechanic Profile", to: "/mechanic" },
  { label: "Create Service Order", to: "/create-service-order" },
  { label: "Add Service Entry", to: "/add-service-entry" },
  { label: "Vehicle History", to: "/vehicle-history" },
  { label: "Work Report", to: "/work-report" },
];
