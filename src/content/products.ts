export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  colour: string;
  image: string;
  sizes: string[];
  ingredients: string;
  allergens: string;
  shelfLife: string;
  hoverImage: string;
};
export const categories = [
  "Bhujia & Sev",
  "Mixtures",
  "Traditional Snacks",
  "Roasted Snacks",
];
const entries = [
  [
    "aloo-bhujia",
    "Aloo Bhujia",
    "Bhujia & Sev",
    "Fine, golden strands with a lively potato-and-spice crunch.",
    "#db3e29",
    "sev",
    "mixture",
  ],
  [
    "ratlami-sev",
    "Ratlami Sev",
    "Bhujia & Sev",
    "A bold peppery bite for those who like a little extra spice.",
    "#265b49",
    "sev",
    "mixture",
  ],
  [
    "nylon-sev",
    "Nylon Sev",
    "Bhujia & Sev",
    "Delicate strands, ready to finish your favourite chaat.",
    "#d69d24",
    "sev",
    "mixture",
  ],
  [
    "khatta-meetha",
    "Khatta Meetha",
    "Mixtures",
    "A playful meeting of sweet, tangy and delightfully crunchy.",
    "#367078",
    "mixture",
    "sev",
  ],
  [
    "navratan-mixture",
    "Navratan Mixture",
    "Mixtures",
    "A little of everything, for everyone around the table.",
    "#743b68",
    "mixture",
    "sev",
  ],
  [
    "classic-mixture",
    "Classic Mixture",
    "Mixtures",
    "An easy-going mix for everyday snack breaks.",
    "#b84c25",
    "mixture",
    "sev",
  ],
  [
    "masala-boondi",
    "Masala Boondi",
    "Traditional Snacks",
    "Tiny golden bites with a generous touch of masala.",
    "#9c522c",
    "mixture",
    "sev",
  ],
  [
    "crunchy-mathri",
    "Crunchy Mathri",
    "Traditional Snacks",
    "A savoury tea-time favourite with a satisfying bite.",
    "#557244",
    "mixture",
    "sev",
  ],
  [
    "moong-dal",
    "Moong Dal",
    "Traditional Snacks",
    "Simply seasoned, lightly salted and full of crunch.",
    "#bd8524",
    "mixture",
    "sev",
  ],
  [
    "masala-peanuts",
    "Masala Peanuts",
    "Roasted Snacks",
    "A nutty crunch with a warming spice finish.",
    "#994234",
    "mixture",
    "sev",
  ],
  [
    "roasted-chana",
    "Roasted Chana",
    "Roasted Snacks",
    "A simple, savoury companion for a busy afternoon.",
    "#48663f",
    "mixture",
    "sev",
  ],
  [
    "cornflake-mix",
    "Cornflake Mix",
    "Mixtures",
    "Crispy flakes and familiar spices in every handful.",
    "#c36928",
    "mixture",
    "sev",
  ],
];
export const products: Product[] = entries.map(
  ([slug, name, category, description, colour, image, hoverImage]) => ({
    slug,
    name,
    category,
    description,
    colour,
    image: "/images/" + image + ".jpg",
    hoverImage: "/images/" + hoverImage + ".jpg",
    sizes: ["100 g", "200 g", "400 g"],
    ingredients:
      "Sample only: gram flour, vegetable oil, salt and spices. Replace with approved pack information.",
    allergens:
      "Sample only: may contain peanuts, tree nuts, gluten and milk. Verify against the actual product.",
    shelfLife: "Demo: 6 months. Replace with verified information.",
  }),
);
