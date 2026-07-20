export const SITE = {
  name: "Charleston Medicine and Behavioral Health",
  shortName: "CMBH",
  tagline: "Whole-Person Care. Elevated.",
  address: {
    line1: "125-A Wappoo Creek Dr, Ste. 202-A",
    city: "Charleston",
    state: "SC",
    zip: "29412",
  },
  phone: "843-913-8558",
  phoneHref: "tel:+18439138558",
  text: "843-998-2933",
  textHref: "sms:+18439982933",
  email: "info@charlestonmedicine.com",
  emailHref: "mailto:info@charlestonmedicine.com",
  hours: [
    { d: "Monday – Thursday", h: "9:00am – 5:00pm" },
    { d: "Friday", h: "9:00am – 12:00pm" },
    { d: "Saturday & Sunday", h: "Closed" },
  ],
  social: {
    facebook: "https://www.facebook.com/charlestonmedicine/",
    instagram: "https://www.instagram.com/charleston_medicine/",
    tiktok: "https://www.tiktok.com/@charlestonmedicine",
  },
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/concierge-medicine", label: "Concierge Medicine" },
  { to: "/physical-health", label: "Physical Health" },
  { to: "/behavioral-health", label: "Behavioral Health" },
  { to: "/womens-health", label: "Women's Health" },
  { to: "/iv-drip-services", label: "IV Drip Services" },
  { to: "/access-plan", label: "Access Plan" },
  { to: "/team", label: "The Team" },
  { to: "/new-patients", label: "New Patients" },
  { to: "/contact", label: "Contact" },
] as const;
