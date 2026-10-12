import type { MenuGroup } from "./menu";

// Seasonal chalkboard menu — swap this block out each season.
// Prices and copy come from the café's handwritten fall board.
export type SeasonalMenu = {
  season: string;
  headline: string;
  blurb: string;
  groups: MenuGroup[];
};

export const seasonalMenu: SeasonalMenu = {
  season: "Fall",
  headline: "Hello Fall",
  blurb:
    "Straight off our chalkboard — limited-time favorites that rotate with the seasons.",
  groups: [
    {
      name: "Fall Plates",
      items: [
        {
          name: "Sarah's Keto",
          price: "$10.00",
          description: "Eggs, bacon, spinach, mozz, cheddar, and Signature sauce, pressed.",
        },
        {
          name: "Supreme Sunrise Nachos",
          price: "$17.50 / $8.00",
          description:
            "Full size or mini (half) size. Tortilla chips, eggs, bacon, chorizo, cheddar, pico de gallo, sour cream, and chipotle sauce.",
        },
        {
          name: "Asiago Ave",
          price: "$9.00",
          description:
            "Bacon, egg, and cheese on an asiago bagel with jalapeño cream cheese and a drizzle.",
        },
      ],
    },
    {
      name: "Fall Sips",
      items: [
        {
          name: "Witch's Fuel",
          price: "$7.00",
          description: "Caramel apple energy lemonade with caramel cold foam.",
        },
        {
          name: "Oatmeal Pie Latte",
          price: "$7.25",
          description:
            "Oatmeal, caramel, and cinnamon with white chocolate drizzle and cinnamon cold foam.",
        },
        { name: "Apple Cider Chai", price: "$6.50" },
        { name: "Pumpkin Latte", price: "$6.50" },
        {
          name: "SF Caramel Pumpkin Latte",
          price: "$6.50",
          description: "Sugar-free caramel and pumpkin latte.",
        },
        {
          name: "Asia's Apple Pie",
          price: "$7.00",
          description: "Caramel apple vanilla latte with cold foam.",
        },
        {
          name: "The Ari",
          price: "$6.50",
          description:
            "Pistachio, caramel, and white chocolate with sea salt white chocolate cold foam.",
        },
        {
          name: "The Lexi",
          price: "$7.50",
          description:
            "Honey, cinnamon, sea salt, and vanilla in oat milk with cinnamon cold foam.",
        },
      ],
    },
  ],
};
