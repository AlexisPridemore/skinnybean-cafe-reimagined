export type MenuItem = { name: string; price: string; description?: string };
export type MenuGroup = { name: string; items: MenuItem[] };
export type MenuSection = { id: string; name: string; blurb: string; groups: MenuGroup[] };

export const menu: MenuSection[] = [
  {
    id: "kitchen",
    name: "Kitchen",
    blurb: "Pressed, stacked and stuffed. Made to order every morning.",
    groups: [
      {
        name: "Sandwiches",
        items: [
          {
            name: "Mozz' Be Nice",
            price: "$8.75",
            description:
              "Fresh mozzarella on ciabatta with house sundried-tomato pesto, spinach and sundried tomatoes, pressed. Pesto contains nuts.",
          },
          {
            name: "Spicy Sunrise",
            price: "$8.75",
            description: "Chorizo, egg, cheddar and chipotle sauce, pressed on ciabatta.",
          },
          {
            name: "Wakin' Bacon (Turkey)",
            price: "$8.75",
            description: "Turkey bacon, egg, cheese and chipotle sauce on a croissant.",
          },
          {
            name: "Grilled Cheese",
            price: "$11.00",
            description: "Cheesy delight on toasted bread. Classic comfort food.",
          },
          {
            name: "The OG",
            price: "$12.00",
            description: "Sausage or bacon, egg and cheese on a pressed croissant. Buy 1, get 1 free.",
          },
          {
            name: "Tuscan",
            price: "$11.00",
            description:
              "Spinach, turkey, bacon, mozzarella, sundried tomatoes and Tuscan cream cheese on a bagel.",
          },
        ],
      },
      {
        name: "Wraps",
        items: [
          {
            name: "Burrito",
            price: "$12.25",
            description:
              "Chorizo, pork breakfast sausage, bacon, eggs, cheddar, house potatoes, house signature sauce and chipotle sauce.",
          },
          {
            name: "Tuscan Wrap",
            price: "$11.00",
            description: "Spinach, turkey, bacon, mozzarella, sun-dried tomatoes, signature sauce.",
          },
          {
            name: "The OG Wrap",
            price: "$8.75",
            description: "Potatoes, sausage or bacon, egg and cheddar.",
          },
        ],
      },
      {
        name: "Bowls",
        items: [
          {
            name: "Not So Skinny Bowl",
            price: "$12.85",
            description:
              "Potato base, chorizo, eggs, cheddar, sausage, bacon, signature sauce and chipotle sauce.",
          },
          {
            name: "The OG Bowl",
            price: "$9.75",
            description: "Potato base, sausage or bacon, eggs and cheddar.",
          },
          {
            name: "Tuscan Bowl",
            price: "$11.00",
            description: "Spinach base, turkey, bacon, mozzarella, sundried tomatoes, signature sauce.",
          },
        ],
      },
      {
        name: "Sauces & Pestos",
        items: [
          {
            name: "Signature Sauce",
            price: "$1.25",
            description: "Made in house with fresh garlic and lemon zest. Herbaceous and delicious.",
          },
          { name: "Chipotle Sauce", price: "$1.25", description: "A little sweet with a smoky kick." },
          { name: "Sun-Dried Tomato Pesto", price: "$2.50", description: "Made in house. Contains nuts." },
        ],
      },
    ],
  },
  {
    id: "coffee",
    name: "Coffee Bar",
    blurb: "Espresso pulled all day, freshly brewed hot coffee, and strong cold brew. ",
    groups: [
      {
        name: "Signature Lattes",
        items: [
          {
            name: "The Salted Bee",
            price: "$8.30",
            description: "Salted honey sauce with espresso, topped with vanilla cold foam.",
          },
          {
            name: "Brown Sugar Cinnamon",
            price: "$7.80",
            description:
              "Brewed over brown sugar with brown sugar & cinnamon syrup, brown sugar cold foam and cinnamon.",
          },
          {
            name: "Bananas Foster",
            price: "$7.80",
            description: "Caramel and banana infused latte, whipped cream and caramel sauce.",
          },
          {
            name: "Berry Me In Chocolate",
            price: "$8.30",
            description: "Espresso with dark chocolate, strawberry and mocha syrup, strawberry cold foam.",
          },
          {
            name: "Loca Mocha",
            price: "$7.80",
            description: "Mocha sauce, white chocolate and chocolate drizzle with white chocolate foam.",
          },
          {
            name: "Blunilla Matcha",
            price: "$7.80",
            description: "Matcha latte with your choice of milk, blueberry and vanilla syrup.",
          },
          {
            name: "Caramel Latte",
            price: "$7.80",
            description: "Caramel syrup & sauce topped with whipped cream, your choice of milk.",
          },
          {
            name: "Pumpkin Matcha",
            price: "$7.80",
            description: "Matcha latte with pumpkin sauce and pumpkin cold foam.",
          },
          {
            name: "Pumpkin Latte",
            price: "$9.50",
            description:
              "Pumpkin syrup & sauce, pumpkin cold foam, cinnamon and allspice. Buy 1, get 1 free.",
          },
          {
            name: "S'Mores Latte",
            price: "$7.80",
            description: "Graham crackers, chocolate syrup and house made whipped cream.",
          },
        ],
      },
      {
        name: "Coffee & Espresso",
        items: [
          {
            name: "Iced Shaken Espresso",
            price: "$6.50",
            description: "Espresso with milk and your choice of syrup, shaken rich and layered.",
          },
          {
            name: "Latte 16 oz",
            price: "$6.75",
            description: "Oat, almond, whole milk or cream. Iced or hot.",
          },
          { name: "Frappé 16 oz", price: "$7.80", description: "Caramel or mocha with whipped cream." },
          {
            name: "Cortado",
            price: "$5.55",
            description: "A balanced mix of espresso and steamed milk, smooth and creamy.",
          },
          { name: "Americano", price: "$5.50", description: "Espresso and water, rich and bold." },
          { name: "Cold Brew 16 oz", price: "$6.50" },
          { name: "Brewed Coffee 12 oz", price: "$3.95", description: "Hot or iced drip coffee." },
        ],
      },
      {
        name: "Tea & More",
        items: [
          {
            name: "Blunilla Matcha Latte",
            price: "$7.25",
            description: "Creamy matcha with vanilla and blueberry essence, blunilla cold foam.",
          },
          {
            name: "Strawberry Chai Pie",
            price: "$7.80",
            description: "Chai latte with strawberry cold foam, dusted with brown sugar.",
          },
          {
            name: "Lavender Matcha Latte",
            price: "$7.25",
            description: "16 to 32 oz, iced or hot.",
          },
          {
            name: "Matcha Latte",
            price: "$6.80",
            description: "Rich green tea blended with milk, creamy and lightly sweet.",
          },
          {
            name: "Chai Latte",
            price: "$6.80",
            description: "Hot or iced with cream, oat, almond, whole milk or half & half.",
          },
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
        name: "Lemonades & Sodas",
        items: [
          { name: "Strawberry", price: "$5.00", description: "Strawberry lemonade or soda." },
          { name: "Blue Raspberry", price: "$5.00", description: "Choice of lemonade or soda." },
          {
            name: "Strawberry Basil",
            price: "$6.75",
            description: "Refreshing blend of strawberries and fresh basil.",
          },
          { name: "Peach Mango", price: "$5.00", description: "Choice of lemonade or soda." },
          { name: "Lemonade", price: "$4.25", description: "Refreshing citrus classic." },
          {
            name: "Cherry Watermelon",
            price: "$5.00",
            description: "Lemonade or soda, available in four sizes.",
          },
          { name: "Blue-Raspberry Watermelon", price: "$5.00", description: "Lemonade or soda." },
        ],
      },
      {
        name: "Protein Shakes",
        items: [
          {
            name: "Espresso Brownie 32 oz",
            price: "$12.75",
            description: "Espresso, chocolate pieces and chocolate protein. Low in sugar, high in flavor.",
          },
          {
            name: "Lemon Pound Cake 32 oz",
            price: "$11.75",
            description: "Natural lemon and pound cake essence. Low in sugar, high in flavor.",
          },
          {
            name: "PB Chocolate Cup 32 oz",
            price: "$12.25",
            description: "Peanut butter and chocolate protein, creamy and rich.",
          },
          {
            name: "Bananas Foster 32 oz",
            price: "$11.75",
            description: "Banana, vanilla protein and a hint of caramel.",
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
          { name: "Bagel", price: "$4.25", description: "Cinnamon raisin, plain or everything." },
          { name: "Blueberry Muffin", price: "$4.75", description: "Soft and studded with blueberries." },
        ],
      },
    ],
  },
];
