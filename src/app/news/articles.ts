export type ArticleCategory =
  | "Agriculture"
  | "Education"
  | "Partnership"
  | "Impact"
  | "Youth"
  | "Community";

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "list"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  category: ArticleCategory;
  date: string;
  isoDate: string;
  image: string;
  excerpt: string;
  featured?: boolean;
  body: ArticleBlock[];
};

// Every fact in these articles comes from one of two SHIFSD documents:
//   • Organizational Profile, updated 09/2026  (public/docs/SHIFSD-Organizational-Profile.pdf)
//   • 2024 Annual Report                       (public/docs/SHIFSD-Annual-Report-2024.pdf)
// No quotes, names or figures beyond those documents. Add new stories only
// from verified sources.
//
// TODO(content): the `date` / `isoDate` values below are the programme start
// dates (or report year) from the profile, not real publication dates. Replace
// them with the actual dates these updates were published.
export const articles: Article[] = [
  {
    slug: "leaders-in-teaching-edc-mastercard-foundation",
    title: "SHIFSD Joins the Leaders in Teaching Program with EDC and Mastercard Foundation",
    category: "Education",
    date: "2025",
    isoDate: "2025-01-01",
    image: "/images/news/scholarship.jpg",
    featured: true,
    excerpt:
      "Since 2025, SHIFSD has served as one of ten local and regional implementing partners on the Leaders in Teaching Program, covering 65 public schools in Bong, Montserrado and Nimba Counties.",
    body: [
      {
        type: "p",
        text: "From 2025 to the present, SHIFSD serves as one of the ten local and regional implementing partners working with the Education Development Center (EDC) / Mastercard Foundation on its Leaders in Teaching (LIT) Program, which covers all fifteen counties of Liberia.",
      },
      {
        type: "p",
        text: "SHIFSD is exclusively assigned to Bong County and Montserrado County #1, as well as three districts in Nimba County — a combined total of 65 public schools.",
      },
      { type: "h2", text: "About Leaders in Teaching" },
      {
        type: "p",
        text: "The Mastercard Foundation's Leaders in Teaching initiative aims to transform secondary education across Africa by strengthening teaching and learning at the secondary level. The program focuses on ensuring that young people acquire 21st-century skills and competencies necessary for employment, lifelong learning, and successful adult lives.",
      },
      { type: "h2", text: "SHIFSD's role" },
      {
        type: "list",
        items: [
          "Training for public secondary school teachers and school leaders.",
          "36 Master Trainers serving as consultants under the LIT Program.",
          "Coverage: Bong County, Montserrado County #1 and three districts in Nimba County — 65 public schools.",
        ],
      },
    ],
  },
  {
    slug: "mission-alliance-partnership",
    title: "Adult Education Project with Mission Alliance Reaches 30 Communities in Lofa",
    category: "Partnership",
    date: "January 2025",
    isoDate: "2025-01-02",
    image: "/images/news/savings-group.jpg",
    excerpt:
      "Since January 2025, SHIFSD and Mission Alliance have been implementing the Adult Education Project in the Zorzor and Salayea Districts of Lofa County, covering 30 communities.",
    body: [
      {
        type: "p",
        text: "From January 2025 to the present, SHIFSD, in partnership with Mission Alliance, is implementing the Adult Education Project (AEP) in the Zorzor and Salayea Districts in Lofa County.",
      },
      {
        type: "p",
        text: "The project covers 30 communities, empowering illiterate Liberians in underserved communities.",
      },
      {
        type: "p",
        text: "The work is part of SHIFSD's Education & Livelihood Skills pillar — equipping youth and women with employable skills and practical knowledge.",
      },
    ],
  },
  {
    slug: "annual-impact-report-2024",
    title: "Our 2024 Annual Report",
    category: "Impact",
    date: "2024",
    isoDate: "2024-12-31",
    image: "/images/news/featured-csa.jpg",
    excerpt:
      "SHIFSD's 2024 Annual Report covers the first year of our five-year strategic plan — farmland, climate-smart agriculture awareness, VSLAs, youth training with EDC and Hummingbird Academy.",
    body: [
      {
        type: "p",
        text: "Our 2024 Annual Report gives an overview of our actions and achievements during 2024, the first year of implementing our five-year strategic plan and its three pillars: Climate Smart Agriculture, Education and Livelihood Skills, and Financial Sustainability. The full report is available to download from our Impact page.",
      },
      { type: "h2", text: "Highlights from the report" },
      {
        type: "list",
        items: [
          "Farmland purchased between 2023 and 2024 reached a total of 28.1 acres, in Kpytuo Town, Nimba County.",
          "Climate-smart agriculture awareness events were held in 25 communities.",
          "Five groups of 150 rural women were trained in VSLA methodologies.",
          "With EDC under the USAID Youth Advance project, SHIFSD built the capacity of 722 youths in Basic Education and Work Ready Now in Montserrado County.",
          "Hummingbird Academy enrolled 381 students in the 2023/2024 school year.",
        ],
      },
    ],
  },
  {
    slug: "strategic-plan-2024-2028-all-we-can",
    title: "Implementing Our Five-Year Strategic Plan with All We Can",
    category: "Partnership",
    date: "2023",
    isoDate: "2023-01-01",
    image: "/images/news/demo-farm.jpg",
    excerpt:
      "With financial and technical support from All We Can, SHIFSD is implementing its five-year strategic plan (2024–2028), with emphasis on financial sustainability.",
    body: [
      {
        type: "p",
        text: "From 2023 to the present, with both financial and technical support from All We Can, SHIFSD is implementing its five-year strategic plan (2024–2028) with emphasis on financial sustainability.",
      },
      { type: "h2", text: "Three thematic pillars" },
      {
        type: "list",
        items: [
          "Education & Livelihood Skills — equipping youth and women with employable skills and practical knowledge.",
          "Climate Smart Agriculture (CSA) — strengthening food security and resilience through farmer training and agribusiness initiatives.",
          "Financial Sustainability — empowering families and communities through VSLAs, financial literacy, and entrepreneurship support.",
        ],
      },
      {
        type: "p",
        text: "In 2024, SHIFSD conducted a baseline survey with 305 households in Nimba County for the AWC/Y-Care International Project, assessing food security and resilience.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelated(slug: string, category: ArticleCategory): Article[] {
  return articles
    .filter((a) => a.slug !== slug)
    .sort((a, b) => {
      const aScore = a.category === category ? 0 : 1;
      const bScore = b.category === category ? 0 : 1;
      if (aScore !== bScore) return aScore - bScore;
      return b.isoDate.localeCompare(a.isoDate);
    })
    .slice(0, 3);
}
