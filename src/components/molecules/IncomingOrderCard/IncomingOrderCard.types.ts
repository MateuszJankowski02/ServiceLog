export type IncomingOrder = {
  id: string;
  vehicle: string;
  owner: string;
  problem: string;
  proposedDate: string;
  urgent?: boolean;
};

export type IncomingOrderCardProps = IncomingOrder & {
  onAccept?: (id: string) => void;
  onDecline?: (id: string) => void;
};
