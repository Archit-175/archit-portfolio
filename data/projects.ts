// Single source of truth for the Projects section (and Live Demo references).
// Copy is FIRST PERSON and roles are HONEST; see mydata/archit_profile.md &
// mydata/archit_career_context.md. Do not overclaim.

export type Theme = "Products" | "AI-ML" | "Web" | "Systems";

export type Project = {
  id: string;
  name: string;
  theme: Theme;
  /** Honest, human role label shown as a badge. */
  role: string;
  /** One-line hook (first person). */
  blurb: string;
  /** Expanded "know more" copy (first person). */
  details: string;
  tech: string[];
  /** Short outcome / status line. */
  outcome: string;
  featured: boolean;
  links: {
    live?: string;
    github?: string;
    paper?: string;
    /** e.g. "coming-soon" when a live demo needs auth / isn't public yet. */
    demo?: "coming-soon";
  };
  /** Optional screenshot in /public/projects. Cards render a themed fallback without it. */
  thumb?: string;
};

export const projects: Project[] = [
  // ── FEATURED (8) ──────────────────────────────────────────────
  {
    id: "kore",
    name: "Kore",
    theme: "Products",
    role: "Solo build · AI-assisted",
    blurb:
      "A real-time collaborative workspace I built solo: Notion + Keep Notes + whiteboards + team chat in one.",
    details:
      "I built Kore end-to-end in about a week (AI-assisted): a custom Yjs-CRDT sync layer running over Supabase Realtime for live multi-user editing, presence and cursors, on a fully RLS-secured Postgres schema (26 tables). It packs nested docs, Notion-style databases (table + kanban), whiteboards, notes, and chat, with global search across all of it.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Yjs CRDT", "Postgres RLS", "BlockNote", "Excalidraw"],
    outcome: "Shipped a working, zero-cost real-time workspace. Try the live demo.",
    featured: true,
    links: { live: "https://kore-sampark.vercel.app/demo" },
  },
  {
    id: "sampark",
    name: "SAMPARK",
    theme: "Products",
    role: "Team lead · product & workflow design",
    blurb:
      "SVNIT's digital document-approval platform, where I own the product vision & workflow and coordinate the dev team.",
    details:
      "SMPRK digitizes the institute's paper-based approval chains for student-club events and reimbursements. I started as product owner, defining the problem, the multi-role approval workflow and the rules, then took charge of the project and built a junior team to sustain it. I lead product & system design and delivery (the NestJS backend is written mostly by my teammates). It's currently in the institute approval process, deploying soon.",
    tech: ["NestJS", "Prisma", "PostgreSQL", "Redis", "JWT Auth", "AWS S3", "pdf-lib"],
    outcome: "Ongoing · in institute approval, deploying soon.",
    featured: true,
    links: {},
  },
  {
    id: "careerpassport",
    name: "CareerPassport",
    theme: "Products",
    role: "Freelance · frontend & product design",
    blurb:
      "A premium marketing/waitlist site I built freelance for a startup, with a WebGL globe, 3D gallery, the works.",
    details:
      "Over ~3 weeks I designed and built the flagship v4 of CareerPassport: a polished product-marketing site with two custom Three.js/WebGL scenes (an interactive wireframe globe and a flat-to-sphere blog gallery), a loader state machine, and GSAP/Framer motion throughout. My focus was the frontend engineering and product design.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Three.js / WebGL", "GSAP", "Framer Motion", "Tailwind v4"],
    outcome: "Delivered as the startup's live flagship site.",
    featured: true,
    links: {
      live: "https://career-passport-v4.vercel.app",
      github: "https://github.com/Archit-175/career-passport-v4",
    },
  },
  {
    id: "brightbird",
    name: "ScrollnLearn",
    theme: "AI-ML",
    role: "Contributor",
    blurb:
      "An AI 'scroll-to-learn' app that turns any topic into swipeable card decks, where I built the adaptive learning layer.",
    details:
      "ScrollnLearn (bright-bird) turns any topic into a swipeable deck of learning cards. Built on a teammate's base, my part was the adaptive learning-events layer and the Gemini-powered content generation. Currently on hold.",
    tech: ["Next.js", "Supabase", "Gemini", "TypeScript"],
    outcome: "Prototype · on hold.",
    featured: true,
    links: {},
  },
  {
    id: "eeg",
    name: "EEG Emotion Recognition",
    theme: "AI-ML",
    role: "Group research · contributor",
    blurb:
      "Calibration-free EEG emotion recognition with deep RL, a group research paper I contributed to.",
    details:
      "Subject-independent (calibration-free) emotion recognition from EEG, so a model generalizes across people without per-user calibration. The approach combines a Double-Dueling DQN and PPO with domain adaptation (Euclidean Alignment, CORAL, DANN) on the DEAP and SEED-IV datasets. I contributed to this collaborative research as one of three authors, not the lead.",
    tech: ["PyTorch", "Double-Dueling DQN", "PPO", "Domain Adaptation", "DEAP / SEED-IV"],
    outcome: "Paper under review.",
    featured: true,
    links: {
      github: "https://github.com/Archit-175/EEG-Emotion-Recognition-RL",
      paper: "https://drive.google.com/file/d/1Zs-Phj2G10crf564G2ZLi1PqpycFY28y/view",
    },
  },
  {
    id: "kidney",
    name: "Kidney Tumor Segmentation",
    theme: "AI-ML",
    role: "Group research · contributor",
    blurb:
      "Uncertainty-aware kidney-tumor segmentation, an Attention Residual U-Net research project I contributed to.",
    details:
      "A medical-imaging segmentation model on the KiTS23 dataset (kidney / tumor / cyst): an Attention Residual U-Net with a guided decoder and Monte-Carlo Dropout that produces per-pixel uncertainty maps for AI-assisted clinical review, reaching ~0.83 mean foreground Dice. I contributed to this group research as one of three authors, not the lead.",
    tech: ["TensorFlow / Keras", "Attention U-Net", "Deep Supervision", "MC-Dropout", "KiTS23"],
    outcome: "~0.83 Dice · paper under review.",
    featured: true,
    links: {
      github: "https://github.com/Archit-175/KidneyTumorSegmentation-ARUGD",
      paper: "https://drive.google.com/file/d/1ucTMprid8-kiHZHOUj5dqHAMaX5TwkIc/view",
    },
  },
  {
    id: "crawlers",
    name: "Crawlers",
    theme: "Web",
    role: "Team · frontend & donation-email flow",
    blurb:
      "A forest-conservation site that won 1st at Web Wonders 2024. I built the frontend and donation-email flow.",
    details:
      "Crawlers is an interactive forest-conservation and awareness website with a clickable SVG world map, country/forest pages, a quiz, and a live weather widget. It won 1st place at Web Wonders 2024. On the team, I worked on the frontend and the donation-to-email flow (Nodemailer backend).",
    tech: ["JavaScript", "GSAP", "SVG", "Node.js", "Nodemailer", "OpenWeatherMap"],
    outcome: "🏆 1st place at Web Wonders 2024.",
    featured: true,
    links: {
      live: "https://crawlers-one.vercel.app",
      github: "https://github.com/Archit-175/Crawlers",
    },
  },
  {
    id: "convolve",
    name: "Credit-Risk Prediction",
    theme: "AI-ML",
    role: "Co-authored · hackathon",
    blurb:
      "A credit-card default prediction model for the Pan-IIT Convolve 3.0 hackathon (~96% accuracy).",
    details:
      "For Convolve 3.0, a Pan-IIT AI/ML hackathon, our team built a customer credit-default prediction model: a 1D-CNN pipeline with SMOTETomek for class imbalance, reaching ~96% accuracy. Co-authored with the team.",
    tech: ["Python", "1D-CNN", "SMOTETomek", "scikit-learn"],
    outcome: "~96% accuracy (hackathon).",
    featured: true,
    links: { github: "https://github.com/Archit-175/Convolve" },
  },

  // ── SEE MORE ──────────────────────────────────────────────────
  {
    id: "sql-tracker",
    name: "SQL-Tracker",
    theme: "Web",
    role: "Solo",
    blurb: "A zero-dependency SQL-practice tracker with encrypted cross-device sync.",
    details:
      "A solo, zero-dependency vanilla-JS app to track SQL practice: daily challenges, analytics, and encrypted (PBKDF2 + AES-GCM) cross-device sync via GitHub Gists.",
    tech: ["Vanilla JS", "Web Crypto", "GitHub Gist API", "SVG"],
    outcome: "Live · solo build.",
    featured: false,
    links: {
      live: "https://sql-tracker-steel.vercel.app",
      github: "https://github.com/Archit-175/SQL-TRACKER",
    },
  },
  {
    id: "puzzle-tracker",
    name: "Puzzle-Tracker",
    theme: "Web",
    role: "Solo",
    blurb: "A sibling to SQL-Tracker for puzzle practice, with the same encrypted sync.",
    details:
      "A solo companion to SQL-Tracker that tracks puzzle-solving practice with SVG analytics and the same encrypted GitHub-Gist sync.",
    tech: ["Vanilla JS", "Web Crypto", "GitHub Gist API", "SVG"],
    outcome: "Live · solo build.",
    featured: false,
    links: {
      live: "https://puzzle-tracker-six.vercel.app",
      github: "https://github.com/Archit-175/Puzzle-Tracker-",
    },
  },
  {
    id: "pneumonia",
    name: "Pneumonia Detection",
    theme: "AI-ML",
    role: "Co-authored",
    blurb: "A CNN chest-X-ray classifier for accessible pneumonia screening.",
    details:
      "A co-authored CNN model that classifies chest X-rays for pneumonia, aimed at accessible AI-assisted screening.",
    tech: ["TensorFlow / Keras", "CNN", "Python"],
    outcome: "Co-authored project.",
    featured: false,
    links: { github: "https://github.com/Archit-175/pneumonia-detection" },
  },
  {
    id: "financial-sentiment",
    name: "Financial Sentiment",
    theme: "AI-ML",
    role: "Co-authored",
    blurb: "Market-sentiment analysis wired into a stock-movement model, with a Streamlit UI.",
    details:
      "A co-authored bootcamp project combining financial-news sentiment with a predictive stock-movement model, surfaced through a Streamlit app.",
    tech: ["Python", "scikit-learn", "XGBoost", "Streamlit", "HF Transformers"],
    outcome: "Co-authored · bootcamp project.",
    featured: false,
    links: { github: "https://github.com/Archit-175/Financial-Sentiment-Analysis-" },
  },
  {
    id: "sql-warehouse",
    name: "SQL Data Warehouse",
    theme: "Systems",
    role: "Solo · learning project",
    blurb:
      "An end-to-end SQL Server data warehouse I built to learn data engineering: Bronze → Silver → Gold medallion ETL.",
    details:
      "A hands-on data-engineering build (Data with Baraa curriculum): I ingest CRM + ERP CSV sources into a three-layer medallion architecture on SQL Server, cleaning and standardizing data through stored-procedure ETL, and model it into a Star Schema (dim_customers, dim_products, fact_sales) ready for analytics. Includes quality-check scripts, a data catalog, and naming conventions.",
    tech: ["SQL Server", "T-SQL", "Medallion Architecture", "Star Schema", "Stored Procedures", "Docker"],
    outcome: "Solo learning build · full ETL pipeline.",
    featured: false,
    links: { github: "https://github.com/Archit-175/SQL-Data-WareHouseProject" },
  },
  {
    id: "sql-analytics",
    name: "SQL Data Analytics",
    theme: "Systems",
    role: "Solo · learning project",
    blurb:
      "14 T-SQL analytics scripts on a retail warehouse: exploration, ranking, time-series, segmentation, and reporting.",
    details:
      "A companion analytics project on top of the Gold-layer Star Schema (Data with Baraa curriculum): I wrote 14 T-SQL scripts covering database/dimension exploration, magnitude and ranking analysis, change-over-time and cumulative trends, performance and data segmentation, part-to-whole analysis, and final customer & product reports.",
    tech: ["SQL Server", "T-SQL", "Window Functions", "CTEs", "Analytics", "Docker"],
    outcome: "Solo learning build · 14 analytics scripts.",
    featured: false,
    links: { github: "https://github.com/Archit-175/Data-Analytics-Project-Learning" },
  },
  {
    id: "parallel-search",
    name: "Parallel Search",
    theme: "Systems",
    role: "Minor role",
    blurb: "An HPC parallel-search benchmarking tool (OpenMP / MPI).",
    details:
      "An academic high-performance-computing search tool exploring OpenMP and MPI parallelism. My role here was minor. I'm listing it honestly for breadth, not as a core strength.",
    tech: ["C++", "OpenMP", "MPI"],
    outcome: "Coursework · minor contribution.",
    featured: false,
    links: {},
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const moreProjects = projects.filter((p) => !p.featured);

/** Filter chips shown above the grid. */
export const themeFilters: Array<"All" | Theme> = ["All", "Products", "AI-ML", "Web", "Systems"];
