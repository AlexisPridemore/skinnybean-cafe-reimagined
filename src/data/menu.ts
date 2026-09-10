export type MenuItem = { name: string; price: string; description?: string };
export type MenuGroup = { name: string; items: MenuItem[] };
export type MenuSection = { id: string; name: string; blurb: string; groups: MenuGroup[] };

export const menu: MenuSection[] = [
  {
    id: "coffee",
    name: "Coffee Bar",
    blurb: "Espresso pulled all day, freshly brewed hot coffee, and strong cold brew. ",
    groups: [
      {
        name: "Coffee & Espresso",
        items: [
          { name: "Brewed Coffee", price: "$3.00" },
          { name: "Americano", price: "$4.50" },
          { name: "Cortado", price: "$4.50" },
          { name: "Cappuccino", price: "$5.00" },
          { name: "Latte", price: "$5.00", description: "Upgrade any latte to a larger size for +$0.50." },
          { name: "Shaken Espresso", price: "$5.50" },
          { name: "Caramel Macchiato", price: "$6.00" },
          { name: "Frappes", price: "$6.50", description: "Choice of mocha, caramel, or Oreo." },
        ],
      },
      {
        name: "Signature Lattes",
        items: [
          {
            name: "S'mores Latte",
            price: "$6.50",
            description: "Chocolate & marshmallow topped with whipped cream & graham cracker pieces.",
          },
          {
            name: "Caramel Latte",
            price: "$6.50",
            description: "Caramel sauce with caramel cold foam.",
          },
          {
            name: "Brown Sugar Cinn",
            price: "$6.50",
            description: "Espresso brewed over brown sugar, topped with cold foam and cinnamon.",
          },
          {
            name: "Bananas Foster",
            price: "$6.50",
            description:
              "Caramel and banana-infused latte topped with banana, cinnamon cold foam, and caramel drizzle.",
          },
          {
            name: "The Salted Bee",
            price: "$7.00",
            description: "Locally sourced honey, sea salt, oat milk, and vanilla cold foam.",
          },
          {
            name: "Loca Mocha",
            price: "$6.50",
            description: "Mocha & white chocolate with white chocolate cold foam and chocolate drizzle.",
          },
          {
            name: "Berry me in Chocolate",
            price: "$7.00",
            description:
              "Espresso over rich chocolate and sweet strawberry, finished with strawberry cold foam and chocolate drizzle.",
          },
          {
            name: "Chocolate Covered Banana",
            price: "$7.00",
            description:
              "Espresso over rich chocolate and banana, finished with banana cold foam and chocolate drizzle.",
          },
          {
            name: "Caramel Cloud",
            price: "$7.00",
            description:
              "Rich caramel and vanilla espresso, served with marshmallow-lined cup and marshmallow cold foam with caramel drizzle.",
          },
          {
            name: "Strawberry Cheesecake",
            price: "$7.00",
            description:
              "Sweet strawberry espresso with strawberry cheesecake cold foam, white chocolate drizzle, and graham cracker pieces.",
          },
          {
            name: "Banana Pudding",
            price: "$7.00",
            description:
              "Sweet banana espresso with banana pudding cold foam, caramel drizzle, and graham cracker pieces.",
          },
        ],
      },
      {
        name: "Tea & Refreshers",
        items: [
          { name: "Chai Latte", price: "$5.50" },
          { name: "Dirty Chai Latte", price: "$6.50" },
          { name: "Strawberry Chai", price: "$6.50" },
          { name: "Matcha Latte", price: "$6.00" },
          { name: "Lavender Matcha", price: "$6.00" },
          { name: "Blunilla Matcha", price: "$6.00" },
          { name: "Strawberry Matcha", price: "$6.50" },
        ],
      },
    ],
  },
  {
    id: "cold",
    name: "Cold & Refreshing",
    blurb: "Lemonades, energizers and protein shakes that are low in sugar and high in flavor.",
    groups: [
      {
        name: "Custom Refreshers",
        items: [
          {
            name: "Strawberry Basil",
            price: "$4.00 / $6.00",
            description: "Lemonade or Lotus.",
          },
          {
            name: "Watermelon Rush",
            price: "$4.00 / $6.00",
            description: "Watermelon and blue raspberry. Lemonade or Lotus.",
          },
          {
            name: "Peach Mango",
            price: "$4.00 / $6.00",
            description: "Lemonade or Lotus.",
          },
          {
            name: "Coconut Wave",
            price: "$4.00 / $6.00",
            description: "Coconut and blue raspberry. Lemonade or Lotus.",
          },
          {
            name: "Pineapple Berry",
            price: "$4.00 / $6.00",
            description: "Pineapple and strawberry. Lemonade or Lotus.",
          },
          {
            name: "Tropical Paradise",
            price: "$4.00 / $6.00",
            description: "A tropical blend of mango, watermelon, coconut, and strawberry. Lemonade or Lotus.",
          },
        ],
      },
      {
        name: "Protein Shakes (24 oz)",
        items: [
          {
            name: "PB-Cup",
            price: "$10.00",
            description: "All protein shakes can be made sugar-free upon request.",
          },
          { name: "Banana Foster", price: "$10.00" },
          { name: "Lemon Poundcake", price: "$10.00" },
          { name: "Espresso Brownie", price: "$10.00" },
          { name: "Strawberry Banana", price: "$10.00" },
          { name: "Berry me in Chocolate", price: "$10.00" },
          {
            name: "Add-ons",
            price: "+$0.75 – $3.50",
            description: "Extra scoop of protein +$3.50, fresh spinach +$0.75, flax seeds +$0.75.",
          },
        ],
      },
    ],
  },
  {
    id: "kitchen",
    name: "Kitchen",
    blurb: "Pressed, stacked and stuffed. Made to order every morning.",
    groups: [
      {
        name: "Breakfast",
        items: [
          {
            name: "The OG Breakfast Sandwich",
            price: "$6.50",
            description: "Egg & cheese on a fresh croissant, served with your choice of protein.",
          },
          {
            name: "The Not So Skinny",
            price: "$11.00",
            description:
              "Hearty mix of egg, cheese, chorizo, bacon, sausage, and potatoes, drizzled with our Signature & Chipotle sauces. Your choice of wrap or bowl.",
          },
          {
            name: "Wakin' Bacon",
            price: "$7.00",
            description:
              "Savory turkey bacon, egg, chipotle sauce, and sharp cheddar on a warm pressed croissant.",
          },
          {
            name: "Spicy Sunrise",
            price: "$8.75",
            description: "Egg, cheese, chorizo, potatoes, and spicy chipotle sauce. Your choice of wrap or bowl.",
          },
          {
            name: "The OG Burrito",
            price: "$7.50",
            description: "Your choice of protein packed with egg, crispy potatoes, and melted cheese.",
          },
          {
            name: "Little Bit of Everything",
            price: "$7.50",
            description:
              "Egg, cheese, your choice of protein, with cream cheese layered on a pressed everything bagel.",
          },
          {
            name: "Egg Bites (2 per order)",
            price: "$5.00",
            description: "Choose from bacon & cheddar or spinach & roasted pepper.",
          },
        ],
      },
      {
        name: "Lunch",
        items: [
          {
            name: "Tuscan Sandwich",
            price: "$9.75",
            description: "Turkey, spinach, bacon, sun-dried tomatoes, and Tuscan cream cheese on a bagel.",
          },
          {
            name: "Tuscan",
            price: "$9.50",
            description:
              "Turkey, spinach, bacon, mozzarella cheese, sun-dried tomatoes and signature sauce. Your choice of wrap or spinach-based bowl.",
          },
          {
            name: "Mozz' Be Nice",
            price: "$7.75",
            description:
              "Melted mozzarella on toasted ciabatta bread, housemade sun-dried tomato pesto, spinach, and sun-dried tomatoes.",
          },
          {
            name: "Grilled Cheese",
            price: "$8.00",
            description:
              "Garlic & herb butter spread with melted sharp cheddar and mozzarella cheese on pressed sourdough bread.",
          },
          {
            name: "Turkey, Bacon & Cheddar Panini",
            price: "$11.50",
            description:
              "Turkey, bacon, cheddar and mozzarella cheese pressed on sourdough with our garlic and herb spread.",
          },
          {
            name: "Turkey & Cheddar Pinwheels",
            price: "$7.50",
            description:
              "Turkey and cheddar cheese wrapped in spinach. Add your choice of signature or chipotle sauce.",
          },
        ],
      },
    ],
  },
  {
    id: "bakery",
    name: "Bakery",
    blurb: "Warm pastries such as muffins and cookies.",
    groups: [
      {
        name: "Treats",
        items: [
          {
            name: "Double Chocolate Chip Muffin",
            price: "$4.75",
            description: "Large, rich and loaded with chocolate chips.",
          },
          {
            name: "Cinnamon Crunch Muffin",
            price: "$4.75",
            description: "Topped with crunchy cinnamon streusel.",
          },
          { name: "Buttery Croissant", price: "$4.00", description: "Flaky layers, rich buttery flavor." },
          { name: "Bagel", price: "$4.25", description: "Asiago, plain, or everything." },
          { name: "Blueberry Muffin", price: "$4.75", description: "Soft and studded with blueberries." },
          {
            name: "Chocolate Chip Cookie",
            price: "$3.50 each / 2 for $6.00",
            description: "Soft, chewy and loaded with chocolate chips.",
          },
        ],
      },
    ],
  },
];
