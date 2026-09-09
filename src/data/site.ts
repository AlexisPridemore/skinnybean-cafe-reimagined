export const site = {
  name: "The Skinny Bean Cafe",
  tagline: "Handcrafted coffee & kitchen — sugar free or all in.",
  address: "5333 Main St, New Port Richey, FL 34652",
  mapsUrl: "https://maps.google.com/?q=5333+Main+St,+New+Port+Richey,+FL+34652",
  phone: "727-232-2042",
  phoneHref: "tel:+17272322042",
  email: "admin@theskinnybeancafe.com",
  orderUrl:
    "https://zingmyorder.com/restaurants/the-skinny-bean-cafe-and-coffee-5333-main-st-new-port-richey-fl-34652-usa",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/theskinnybeancafe" },
    { label: "Facebook", href: "https://www.facebook.com/theskinnybeancafe" },
    { label: "TikTok", href: "https://www.tiktok.com/@theskinnybeancafe" },
    { label: "Google", href: "https://maps.google.com/?q=The+Skinny+Bean+Cafe+New+Port+Richey" },
  ],
} as const;

export const hours = [
  { day: "Monday", time: "7:30 am – 4:00 pm" },
  { day: "Tuesday", time: "7:30 am – 4:00 pm" },
  { day: "Wednesday", time: "7:30 am – 4:00 pm" },
  { day: "Thursday", time: "7:30 am – 4:00 pm" },
  { day: "Friday", time: "7:30 am – 5:00 pm" },
  { day: "Saturday", time: "8:00 am – 3:00 pm" },
  { day: "Sunday", time: "Closed" },
];
