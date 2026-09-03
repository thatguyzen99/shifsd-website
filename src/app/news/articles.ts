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

export const articles: Article[] = [
  {
    slug: "csa-training-7-counties",
    title: "CSA Training Reaches 7 Counties Across Liberia",
    category: "Agriculture",
    date: "March 15, 2025",
    isoDate: "2025-03-15",
    image: "/images/news/featured-csa.jpg",
    featured: true,
    excerpt:
      "Our Climate-Smart Agriculture program has expanded to reach all seven target counties in Liberia, equipping over 1,187 smallholder farmers with sustainable techniques for food security and climate resilience.",
    body: [
      {
        type: "p",
        text: "After nearly a decade of building a Climate-Smart Agriculture (CSA) practice from the ground up, SHIFSD has now trained more than 1,187 smallholder farmers across all seven of the counties we serve — Montserrado, Nimba, River Gee, Maryland, Lofa, Bomi, and Grand Cape Mount.",
      },
      {
        type: "p",
        text: "The 28.1-acre demonstration farm in Kpytuo Town, Nimba County, has become the practical heart of the program. Farmers travel from surrounding communities to see conservation agriculture, agroforestry, and post-harvest handling in action, then return home with seeds, tools, and a training plan for their own plots.",
      },
      { type: "h2", text: "What farmers are learning" },
      {
        type: "list",
        items: [
          "Conservation agriculture — minimum tillage, cover crops, and crop rotation to rebuild soil health.",
          "Agroforestry — pairing trees with crops for shade, fertility, and extra income from fruit and timber.",
          "Post-harvest management — drying, storage, and simple processing to cut losses in half.",
          "Community seed multiplication — banking improved varieties so no one has to buy seed each season.",
        ],
      },
      {
        type: "quote",
        text: "Before SHIFSD's training, my rice yield could barely feed my family. After learning conservation techniques on the demo farm, I harvested twice as much last season and sold the surplus to pay school fees.",
        attribution: "Musa B., Nimba County",
      },
      {
        type: "p",
        text: "Yield improvements now average 85% across participating households, according to our year-on-year monitoring. Just as importantly, farmers report they are eating from their own fields for more months of the year and depending less on emergency food purchases when rains are late.",
      },
      {
        type: "p",
        text: "The next expansion phase — running from mid-2025 through 2028 — will deepen the program in Lofa and River Gee, formalise farmer-to-farmer training cohorts, and open a second demonstration plot closer to the southeastern counties.",
      },
    ],
  },
  {
    slug: "scholarship-50-young-leaders",
    title: "Scholarship Program Empowers 50 Young Leaders",
    category: "Education",
    date: "February 28, 2025",
    isoDate: "2025-02-28",
    image: "/images/news/scholarship.jpg",
    excerpt:
      "SHIFSD's scholarship program has now supported 50 Liberian students through secondary and higher education — a milestone made possible by partners, donors, and the young people themselves.",
    body: [
      {
        type: "p",
        text: "This month we crossed a milestone that felt out of reach when the scholarship program started: 50 young Liberians supported through secondary and higher education. The scholarships cover tuition, materials, and — where needed — transport and meals, because we learned early that a full scholarship still fails if a student can't reach class.",
      },
      {
        type: "p",
        text: "The 50 recipients come from every county we operate in. About two-thirds are pursuing secondary school at Hummingbird Academy and partner schools; the rest are enrolled in TVET tracks at Holy Hands Institute or in tertiary programs at Liberian universities. Roughly half are young women, up from a third when the program began.",
      },
      { type: "h2", text: "How we choose recipients" },
      {
        type: "p",
        text: "Selection is done with communities, not in an office in Monrovia. Local teachers and community leaders nominate students, and a shared committee reviews academic promise, financial need, and — critically — the student's own plans for what they want to do after graduating. We renew scholarships year over year based on progress, not one-time need.",
      },
      {
        type: "quote",
        text: "I would not have finished 12th grade without the scholarship. Now I want to teach in the same school that taught me.",
        attribution: "Scholarship graduate, Bomi County",
      },
      {
        type: "p",
        text: "The next class starts in September. Applications open through our county coordinators in July.",
      },
    ],
  },
  {
    slug: "mission-alliance-partnership",
    title: "New Alliance with Mission Alliance Strengthens Programs",
    category: "Partnership",
    date: "February 28, 2025",
    isoDate: "2025-02-28",
    image: "/images/news/mission-alliance.jpg",
    excerpt:
      "A new multi-year partnership with Mission Alliance will expand our adult literacy and village savings work in Lofa and Nimba Counties.",
    body: [
      {
        type: "p",
        text: "SHIFSD is entering a multi-year partnership with Mission Alliance to expand adult literacy and village savings and loan association (VSLA) programming in Lofa and Nimba Counties. The agreement was signed in February 2025 and runs through 2028.",
      },
      {
        type: "p",
        text: "Under the partnership, Mission Alliance provides multi-year, unrestricted core funding, and SHIFSD contributes on-the-ground implementation, county-level coordinators, and the community trust built over 20 years of continuous presence. The two organisations will share monitoring, learning, and financial reporting.",
      },
      { type: "h2", text: "What the partnership funds" },
      {
        type: "list",
        items: [
          "Adult literacy circles using the REFLECT methodology, targeting 500 new learners over three years.",
          "Formation of 25 new VSLAs in Lofa and Nimba, with a bias toward women-led groups.",
          "Training of local facilitators so the work continues after the funding cycle.",
          "Baseline and endline evaluations to test whether the model can scale beyond these two counties.",
        ],
      },
      {
        type: "p",
        text: "Mission Alliance's decision to fund adult literacy — a category that many donors quietly deprioritise — was one of the reasons this partnership came together. Liberian adults finishing REFLECT circles routinely become the record-keepers, savings-group leaders, and school committee members their communities need.",
      },
    ],
  },
  {
    slug: "demo-farm-record-harvest",
    title: "Demonstration Farm Yields Record Harvest",
    category: "Agriculture",
    date: "February 28, 2025",
    isoDate: "2025-02-28",
    image: "/images/news/demo-farm.jpg",
    excerpt:
      "The 28.1-acre demonstration farm in Nimba County recorded its best harvest yet — validating the conservation techniques we now teach farmers across seven counties.",
    body: [
      {
        type: "p",
        text: "The 28.1-acre SHIFSD demonstration farm in Kpytuo Town, Nimba County, has just closed its most productive season since we acquired the land in 2023. Rice, cassava, and short-cycle vegetables all exceeded target yields — cassava by 41 percent, rice by 28 percent.",
      },
      {
        type: "p",
        text: "The farm's role is deliberately double-edged: it is a working farm generating produce for local markets, and it is a training site where farmers from surrounding communities can see conservation methods without having to take a risk on their own fields first.",
      },
      { type: "h2", text: "Why yields keep climbing" },
      {
        type: "p",
        text: "Three factors stand out from this season's records. First, cover cropping over the previous dry season protected soil moisture into planting. Second, we rotated maize and legumes on the same plots to fix nitrogen naturally, avoiding the fertiliser costs that price most smallholders out of yield gains. Third, our post-harvest drying racks — built on-site from local materials — cut losses from mould and rot by nearly half.",
      },
      {
        type: "quote",
        text: "The demo farm isn't a demonstration in a lab. It has to work commercially or the model isn't real. This year it worked, and it worked with the same tools our farmers have at home.",
        attribution: "Program coordinator, Nimba",
      },
      {
        type: "p",
        text: "Surplus revenue from the harvest goes back into the program: seed multiplication, farmer training subsidies, and — starting this cycle — a small revolving fund for participating families to buy tools without borrowing at market rates.",
      },
    ],
  },
  {
    slug: "youth-leadership-summit",
    title: "Youth Leadership Summit Brings Together 100 Changemakers",
    category: "Youth",
    date: "October 22, 2024",
    isoDate: "2024-10-22",
    image: "/images/news/youth-summit.jpg",
    excerpt:
      "One hundred young Liberians from every county SHIFSD serves gathered in Monrovia for three days of leadership training, project design, and mentorship.",
    body: [
      {
        type: "p",
        text: "SHIFSD hosted its largest youth leadership summit to date in October, bringing 100 young Liberians — ages 16 to 26 — from every county we work in to Monrovia for a three-day intensive on leadership, project design, and community mobilisation.",
      },
      {
        type: "p",
        text: "The summit's structure was deliberately practical. Rather than lectures, participants worked in county-based cohorts to identify a real problem in their own community and prototype a project response in 72 hours. On the final day, each team pitched to a panel of SHIFSD program directors and partner-organisation representatives.",
      },
      { type: "h2", text: "The projects that made it out the door" },
      {
        type: "list",
        items: [
          "A peer literacy support network across four schools in Bomi.",
          "A women-in-agriculture radio segment on a community station in Lofa.",
          "A youth savings group modelled on VSLA, seeded with $200 in matched savings.",
          "A community mapping project documenting off-grid schools in River Gee.",
        ],
      },
      {
        type: "p",
        text: "Three of the four projects have small implementation grants from SHIFSD's youth fund and are now in their first quarter of operation. The fourth — the school mapping project — is being folded into our monitoring and evaluation work directly.",
      },
      {
        type: "quote",
        text: "The best thing about the summit wasn't the training. It was meeting other people my age who are already doing this work in their own towns.",
        attribution: "Summit participant, Grand Cape Mount",
      },
    ],
  },
  {
    slug: "annual-impact-report-2024",
    title: "Annual Impact Report Shows 85% Yield Improvement",
    category: "Impact",
    date: "September 30, 2024",
    isoDate: "2024-09-30",
    image: "/images/news/impact-report.jpg",
    excerpt:
      "SHIFSD's 2024 Annual Impact Report is out — with independently verified figures on program reach, yield gains, and financial transparency across all seven counties.",
    body: [
      {
        type: "p",
        text: "The SHIFSD 2024 Annual Impact Report is published. The full document — including audited financials and independently verified program numbers — is available to download from this page and from our office in Johnsonville Township.",
      },
      { type: "h2", text: "Headline numbers" },
      {
        type: "list",
        items: [
          "1,187+ direct beneficiaries reached across all program areas.",
          "85% average yield improvement among CSA-trained households.",
          "50+ scholarships awarded through the education program.",
          "6 strategic funding partnerships closed or extended.",
          "85% of every dollar spent went directly to program activities.",
        ],
      },
      {
        type: "p",
        text: "The 85% program-spend figure is the one we're proudest of. Nonprofit finance is not usually a headline story, but keeping administrative and fundraising costs low while still investing in the people who run our programs is a discipline we have worked hard at, year after year.",
      },
      {
        type: "quote",
        text: "You can measure impact in acres and beneficiaries, and you should. But you should also measure it in whether a family is eating three meals a day instead of one. This year, more of them are.",
        attribution: "Jeremiah Burgess, Executive Director",
      },
      {
        type: "p",
        text: "The report also flags where we underperformed — including a slower-than-planned rollout in River Gee and a partial gap in monitoring data from one Lofa cohort — and how we plan to close those gaps in 2025.",
      },
    ],
  },
  {
    slug: "womens-savings-grand-bassa",
    title: "Women's Savings Group Launches in Grand Bassa",
    category: "Community",
    date: "November 8, 2024",
    isoDate: "2024-11-08",
    image: "/images/news/savings-group.jpg",
    excerpt:
      "Twenty-two women in Grand Bassa County have formed SHIFSD's newest village savings and loan association — the first VSLA outside our seven primary counties.",
    body: [
      {
        type: "p",
        text: "Twenty-two women in Grand Bassa County have formed SHIFSD's newest village savings and loan association. The group met for its first formal weekly deposit on November 8, 2024, marking the first VSLA to launch outside our seven primary counties.",
      },
      {
        type: "p",
        text: "The VSLA model is straightforward: members meet weekly, deposit small amounts into a shared, locked box, and loan out to each other at a group-agreed interest rate. At the end of a 12-month cycle, the box is opened and everything is redistributed — savings plus a share of interest earned. No bank, no outside capital, and no dependence on the timing of an external donor grant.",
      },
      { type: "h2", text: "Why Grand Bassa" },
      {
        type: "p",
        text: "Grand Bassa isn't in our official coverage counties, but a delegation of women there approached SHIFSD in mid-2024 after seeing how VSLAs had transformed savings-group members in Nimba. They asked whether the model could be adapted to their community, and — with support from our Nimba-based facilitators, who travelled to help train the founding officers — the answer became yes.",
      },
      {
        type: "quote",
        text: "Our village savings group started with 15 members and $200. Two years later we're 42 members and have loaned out over $6,000 to small businesses. No one had to leave town to find capital.",
        attribution: "James T., VSLA Chairperson, Nimba",
      },
      {
        type: "p",
        text: "The Grand Bassa group is now the third community-initiated request we've had this year. We are keeping our formal coverage focused on the seven counties, but where communities can self-organise and want the training, we will show up.",
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
