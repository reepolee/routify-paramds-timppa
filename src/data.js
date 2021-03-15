let categories = [
  { id: 1, title: "Food", slug: "food" },
  { id: 2, title: "Beverages", slug: "beverages" },
  { id: 3, title: "Cleaners", slug: "cleaners" },
];

let products = [
  { id: 101, category_id: 1, title: "Bread", slug: "bread" },
  { id: 102, category_id: 1, title: "Butter", slug: "butter" },
  { id: 103, category_id: 1, title: "Honey", slug: "honey" },

  { id: 201, category_id: 2, title: "Water", slug: "water" },
  { id: 202, category_id: 2, title: "Milk", slug: "milk" },
  { id: 203, category_id: 2, title: "Beer", slug: "beer" },

  { id: 301, category_id: 3, title: "Jar", slug: "jar" },
  { id: 302, category_id: 3, title: "Vim", slug: "vim" },
  { id: 403, category_id: 3, title: "Vileda", slug: "vileda" },
];

export default { categories, products };
