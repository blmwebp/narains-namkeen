export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  date: string;
  body: string[];
  ingredients?: string[];
  steps?: string[];
  time?: string;
  product?: string;
};
export const recipes: Article[] = [
  {
    slug: "namkeen-bhel",
    title: "A bowl of happy: namkeen bhel",
    category: "Quick Bites",
    excerpt:
      "Fresh, tangy and crunchy. An easy bowl to put together before the chai is ready.",
    image: "/images/bhel.jpg",
    date: "2026-11-01",
    time: "10 minutes",
    product: "classic-mixture",
    body: [
      "A fresh bowl of bhel is all about contrast: crisp namkeen, juicy vegetables and a bright squeeze of lime. This is an illustrative serving idea; adjust seasonings to your taste.",
    ],
    ingredients: [
      "1 cup puffed rice",
      "½ cup namkeen mixture",
      "1 small tomato, chopped",
      "½ small onion, chopped",
      "1 tablespoon coriander",
      "Lime juice and chutney to taste",
    ],
    steps: [
      "Chop the vegetables and wash the coriander.",
      "Combine puffed rice, mixture, tomato and onion in a bowl.",
      "Add a little chutney and lime juice. Toss gently.",
      "Finish with coriander and serve immediately to keep the crunch.",
    ],
  },
  {
    slug: "sev-chaat",
    title: "The five-minute sev chaat",
    category: "Chaat",
    excerpt: "Turn a handful of sev into a colourful evening snack.",
    image: "/images/sev.jpg",
    date: "2026-11-03",
    time: "5 minutes",
    product: "nylon-sev",
    body: [
      "Keep the sev aside until the last moment. That final sprinkle brings texture to this simple chaat.",
    ],
    ingredients: [
      "½ cup sev",
      "1 boiled potato, diced",
      "½ cup cooked chickpeas",
      "2 tablespoons yoghurt",
      "Chutney and coriander to taste",
    ],
    steps: [
      "Arrange potato and chickpeas in a bowl.",
      "Spoon over yoghurt and chutney.",
      "Top with sev and coriander just before serving.",
    ],
  },
  {
    slug: "mixture-toast",
    title: "A crunchy twist on toast",
    category: "Chai-Time",
    excerpt: "Warm toast meets a lively namkeen topping.",
    image: "/images/mixture.jpg",
    date: "2026-11-05",
    time: "10 minutes",
    product: "khatta-meetha",
    body: [
      "A quick savoury toast for those afternoons when you want something a little different.",
    ],
    ingredients: [
      "2 slices bread",
      "¼ cup mixture",
      "2 tablespoons chopped tomato",
      "1 tablespoon chopped onion",
      "Butter and coriander to taste",
    ],
    steps: [
      "Toast the bread with a little butter.",
      "Mix tomato and onion and spread over the toast.",
      "Scatter mixture and coriander on top. Serve immediately.",
    ],
  },
  {
    slug: "chai-time-platter",
    title: "Build a chai-time sharing platter",
    category: "Chai-Time",
    excerpt: "A few bowls, a warm cup, and good company.",
    image: "/images/chai.jpg",
    date: "2026-11-07",
    time: "5 minutes",
    product: "ratlami-sev",
    body: [
      "Make snack time feel special with an easy sharing platter. Keep wet accompaniments separate so your snacks stay crisp.",
    ],
    ingredients: [
      "Small bowls of your favourite namkeen",
      "Fresh cucumber slices",
      "Lime wedges",
      "Your favourite chai",
    ],
    steps: [
      "Arrange namkeen in separate bowls.",
      "Place cucumber and lime on the side.",
      "Pour the chai and serve the platter while it is fresh.",
    ],
  },
];
export const news: Article[] = [
  {
    slug: "the-art-of-sharing",
    title: "The little art of sharing a snack",
    category: "Product Stories",
    excerpt:
      "Why a bowl in the middle of the table always feels like an invitation.",
    image: "/images/mixture.jpg",
    date: "2026-11-02",
    body: [
      "Sample editorial — not a company announcement.",
      "Some of the best conversations begin with a simple gesture: a bowl placed between friends. Snacks create a pause in a busy day and a reason to sit together.",
      "For your own gatherings, serve a small variety in separate bowls. Let everyone find a favourite, and refresh portions as needed.",
    ],
  },
  {
    slug: "meet-your-new-tea-time",
    title: "Make more of your evening break",
    category: "Brand Updates",
    excerpt: "An invitation to pause, pour and reconnect.",
    image: "/images/chai.jpg",
    date: "2026-11-06",
    body: [
      "Sample brand story for layout review.",
      "An evening break can be wonderfully simple. A warm cup, a small savoury bite, and a little time away from the screen.",
      "This space is ready for approved Narain’s announcements and stories. Replace this example before public launch.",
    ],
  },
  {
    slug: "a-table-for-everyone",
    title: "A table with room for everyone",
    category: "Events",
    excerpt: "A sample story space for future gatherings and brand events.",
    image: "/images/bhel.jpg",
    date: "2026-11-10",
    body: [
      "Illustrative event article. No actual event is being announced.",
      "Use this space to share an approved event recap, photographs and details of how visitors can meet the brand.",
      "Add confirmed dates and locations only when your event information is ready.",
    ],
  },
];
