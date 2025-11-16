export type TextTestimonial = {
  initials: string;
  name: string;
  badge?: string; // e.g., "FASTEST"
  story: string; // one short line
  money: string; // the 💰 line, verbatim
};

export const textTestimonials: TextTestimonial[] = [
  {
    initials: "AQ",
    name: "Aqib",
    story: "High-ticket setter working across multiple offers after leaving his job.",
    money: "💰 $60k+ collected",
  },
  {
    initials: "ME",
    name: "Melih",
    story: "Holds two remote setter roles with Muslim influencers.",
    money: "💰 $3k-$4k monthly OTE",
  },
  {
    initials: "MH",
    name: "Mohamad Hussein",
    story: "Moved from setter to closer to COO inside a values-first agency.",
    money: "💰 $7k OTE monthly",
  },
  {
    initials: "AE",
    name: "Aeman",
    story: "Relocated while working an agency setter role.",
    money: "💰 Landed $2k-$5k OTE",
  },
  {
    initials: "HO",
    name: "Hosaam",
    story: "Balanced two setter roles shortly after joining.",
    money: "💰 ~$2k+ earned in 37 days",
  },
  {
    initials: "MA",
    name: "Muhammad Afdhal",
    story: "Consistently stacking commissions across remote offers.",
    money: "💰 $6.8k earned",
  },
  {
    initials: "AR",
    name: "Abid ur Rahman",
    story: "Earns a base salary plus commission in his setter role.",
    money: "💰 Landed 4-figure OTE",
  },
  {
    initials: "MU",
    name: "Muntasir",
    badge: "FASTEST",
    story: "Closed his first paid deal only days after onboarding.",
    money: "💰 $700 in 3 days",
  },
  {
    initials: "SH",
    name: "Shehab",
    story: "Started with zero high-ticket sales experience.",
    money: "💰 $2.1k earned remotely",
  },
];
