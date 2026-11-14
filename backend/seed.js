import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import CareerTrack from './models/CareerTrack.js';
import Internship from './models/Internship.js';

dotenv.config();

export const defaultCareerTracks = [
  {
    slug: 'marketing',
    trackNumber: 'Track 01',
    title: 'Marketing',
    category: 'Client & Growth',
    icon: 'campaign',
    description: 'Lead campaign strategy, brand management, consumer psychology, and market expansion for emerging brands and MNCs.',
    entryRoles: ['Marketing Associate', 'Brand Coordinator', 'Digital Strategist'],
    competencies: ['Omnichannel CRM', 'Attribution Models', 'Social Listening'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAO8nGfyCAEJIYQGwH6JqDLAu42m0m_XdN14UyYX0EDQZACEG1_my6R6_6ojUseWaOPUKLtnx5q5xRgDuqtL6WqV6R4hNH1pfnG5prNy9st33rNupbaKCyu9IP1is6dcUv20V5jfKgahxh03jkoY0i225HL13Ml5hPYfn-u9bzANqYr_5ESKynMi2WUHI1J2H1ZGBgt3n36x2Y-6v6yIVZ5HKOwOTlHfMuql6rF7PtP0m6R0IdU2SkJg',
    imageAlt: 'Marketing student moodboard digital campaign'
  },
  {
    slug: 'finance',
    trackNumber: 'Track 02',
    title: 'Finance',
    category: 'Analytical & Quant',
    icon: 'query_stats',
    description: 'Analyze financial statements, manage investment portfolios, valuation modeling, and corporate treasury operations.',
    entryRoles: ['Financial Analyst', 'Wealth Management Associate', 'Credit Analyst'],
    competencies: ['DCF Modeling', 'Financial Statements', 'Bloomberg Terminal'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBkwrDzl-qaKHyKumFmUkzDaWMdCRICdLuXQN27jY1iA33vlG7yWTPKqm24ZB9NNUBBTgD3CxHWGSlrzWIlM8RDvfp7L8MKbrQzT_INReaTlgKvE33F520rDdadi5CbJi5Oplv1Fx-ZG3DMrZVogq7syY3e-hsYU3lzJeyRiM2ZEIxQWVHBtvfNx-iVhdh8w2hGZSWziexL-Gag9hN5Nffo_tmCS09rmaVWF7SWI5Qq77kZ9VYPzXl6w',
    imageAlt: 'Finance student analyzing valuation spreadsheets'
  },
  {
    slug: 'hr',
    trackNumber: 'Track 03',
    title: 'Human Resources',
    category: 'People & Culture',
    icon: 'groups',
    description: 'Shape organizational culture, manage talent acquisition, employee engagement, compensation structuring, and workplace training.',
    entryRoles: ['HR Generalist', 'Talent Acquisition Specialist', 'People Operations'],
    competencies: ['Talent Pipeline', 'DE&I Policy', 'HRIS Platforms'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuvKmGg078d3XTWCX0isU9leriGx9Whd7y4olsI07fN6E4j8fJe5nIkNClyD6eAydeKB5TXj7HN1OnFWFFjKa-8pchbkJ6ygu0xkyIJxHwq33tq1wb5o2gQQ3FpgKyFY6gwjCNhynJyQzV4hklPhWZhLa0eIOj9mOA856gU5YuKv45IDcMTLR7rKuxSzjwEcKjpDaPbvGhX8-A0EqPYHoOhgzaj9b0UFhQD0ORt93PskAULhHxoEEMWA',
    imageAlt: 'HR professional conducting interviewing workshop'
  },
  {
    slug: 'analytics',
    trackNumber: 'Track 04',
    title: 'Business Analytics',
    category: 'Analytical & Quant',
    icon: 'insights',
    description: 'Turn complex organizational data into actionable strategic insights using statistical modeling, BI dashboards, and trend forecasting.',
    entryRoles: ['Junior Business Analyst', 'Operations Analyst', 'Market Insights Associate'],
    competencies: ['SQL & Python', 'Tableau / Power BI', 'Predictive Analytics'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABSSy7rUwYEnIvIkoHZexrYhNh5FrFvz3kZwa4XDsP1TGNa8P1wWAKISVQ_eWq6ySbFpG9aWUYawEkaZWY27lfl_JgL0vh5cyNMxJN-OGY0zGolT0rProCgPtX-_F9Hf8DcNfIZeg4_I1mfzYE8GdMVKwY_EeYEZTtKxQ5vMoX9Y63bfWaOhmEHfCfL2RRmzzZvs9pnjBAHdPFSN_SYgxBRMboelsm5P4rg0SxuDNhABOj4r5-hz5OzA',
    imageAlt: 'Business analyst presenting data dashboard'
  },
  {
    slug: 'sales',
    trackNumber: 'Track 05',
    title: 'Sales',
    category: 'Client & Growth',
    icon: 'handshake',
    description: 'Drive enterprise revenue growth, master client relationship management, negotiation, B2B consultative selling, and account handling.',
    entryRoles: ['Business Development Executive', 'Account Representative', 'Sales Operations'],
    competencies: ['B2B Negotiation', 'Salesforce CRM', 'Pipeline Management'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7_Y7BvgDR1fxqNS18B2x2xM4MCRc4KoK1bIYMYNR5FZPkSK-FacTefiZDLBxb105SbYnrL9qNMWd5tm8LUdBt-pTLfxi_urPCzLX3Ien6TFXeKFURZ-An9i5gGhPfOK1pY_HE7EpVKswInUXxSyrVfD7keXUNgyFDaAc5wkbOwB67eKOMhwHLtwA61wjvi64MS3jXVIHw8sDtuVku4vsCfoUYIrH9iTkc8pAlaszbgyeU4pLlgAum7w',
    imageAlt: 'B2B sales professional closing enterprise deal'
  },
  {
    slug: 'entrepreneurship',
    trackNumber: 'Track 06',
    title: 'Entrepreneurship',
    category: 'Venture & Innovation',
    icon: 'rocket_launch',
    description: 'Learn how to validate product-market fit, build business models, manage lean operations, and pitch to angel investors and incubators.',
    entryRoles: ['Founding Team Trainee', 'Venture Analyst', 'Product Trainee'],
    competencies: ['Lean Canvas', 'Go-To-Market', 'Investor Deck Pitch'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATgjZwS_XC_k7toBVNSaNrb5S4ej-xbsJcknLkmZuq7XoJnsb6aCgJpiKKMt0qSbHC_jthYdVKPCNCSJVnT0aMKqKrNmIkICxk2WQ4NFOgaliBhRPDYmSTvyJ99BkYRGWZ24DnMidi5u7tgcrmt_ac2iXRxzj49YA-k-TBJ69BnH2k3fn52HUr5QfJ8_fr9fgmRYfRnj_kGNx1IGBQ7IzUGLTZaYajmul3e2TnhdGV9gVtMh5htqVZ4w',
    imageAlt: 'Startup founder pitching to investors'
  }
];

export const defaultInternships = [
  {
    company: 'Apex Consumer Goods Co.',
    initial: 'A',
    roleTitle: 'Brand Strategy & Growth Trainee',
    track: 'Marketing',
    location: 'Chicago, IL (Hybrid)',
    stipend: '$3,800 / mo',
    duration: '10 Weeks (Summer)',
    deadlineStatus: 'Rolling Intake',
    type: 'Summer Internship',
    description: 'Collaborate with senior brand managers on market research, consumer segmentation, and omnichannel campaign deployment.',
    requirements: ['Excel proficiency', 'Strong written communication', 'Junior/Senior BBA standing']
  },
  {
    company: 'Nexus Capital Partners',
    initial: 'N',
    roleTitle: 'Summer Financial Analyst',
    track: 'Finance',
    location: 'New York, NY (On-site)',
    stipend: '$5,200 / mo',
    duration: '12 Weeks (Summer)',
    deadlineStatus: 'Closes Apr 30',
    type: 'Summer Internship',
    description: 'Conduct corporate valuation models, financial statement spreads, and pitch deck research for investment committees.',
    requirements: ['Financial Accounting coursework', 'Advanced Excel / DCF', '3.5+ GPA']
  },
  {
    company: 'Horizon Tech Solutions',
    initial: 'H',
    roleTitle: 'Junior Data & BI Analyst',
    track: 'Business Analytics',
    location: 'Austin, TX (Remote)',
    stipend: '$4,500 / mo',
    duration: '10 Weeks (Summer)',
    deadlineStatus: 'Priority Deadline',
    type: 'Summer Internship',
    description: 'Transform raw product event logs into automated SQL pipelines and Tableau executive dashboards.',
    requirements: ['SQL fundamentals', 'Power BI or Tableau', 'Data modeling aptitude']
  },
  {
    company: 'Vanguard People Operations',
    initial: 'V',
    roleTitle: 'Talent Acquisition & HR Trainee',
    track: 'Human Resources',
    location: 'Boston, MA (Hybrid)',
    stipend: '$3,400 / mo',
    duration: '8 Weeks (Summer)',
    deadlineStatus: 'Rolling Intake',
    type: 'Summer Internship',
    description: 'Coordinate university recruiting programs, optimize ATS applicant flows, and design DE&I onboarding workshops.',
    requirements: ['Organizational Behavior coursework', 'Interpersonal communication', 'Workday familiarity']
  },
  {
    company: 'Elevate Enterprise SaaS',
    initial: 'E',
    roleTitle: 'B2B Sales & Account Representative',
    track: 'Sales',
    location: 'San Francisco, CA (Hybrid)',
    stipend: '$4,000 / mo + Commission',
    duration: '12 Weeks (Summer)',
    deadlineStatus: 'Open Now',
    type: 'Summer Internship',
    description: 'Research prospective accounts, conduct consultative lead discovery calls, and manage Salesforce CRM pipelines.',
    requirements: ['Salesforce experience', 'Persuasive presentation skills', 'Competitive drive']
  },
  {
    company: 'InnovateX Ventures',
    initial: 'I',
    roleTitle: 'Venture Operations Trainee',
    track: 'Entrepreneurship',
    location: 'Seattle, WA (On-site)',
    stipend: '$3,900 / mo',
    duration: '10 Weeks (Summer)',
    deadlineStatus: 'Closes May 15',
    type: 'Summer Internship',
    description: 'Work directly alongside early-stage startup founders on competitive benchmarking, MVP launches, and pitch decks.',
    requirements: ['Agile workflow familiarity', 'Market research skills', 'Proactive mindset']
  }
];

export async function seedDatabase() {
  const isConnected = await connectDB();
  if (isConnected) {
    try {
      await CareerTrack.deleteMany({});
      await CareerTrack.insertMany(defaultCareerTracks);
      console.log('[Seed] Career tracks seeded successfully.');

      await Internship.deleteMany({});
      await Internship.insertMany(defaultInternships);
      console.log('[Seed] Internships seeded successfully.');
    } catch (err) {
      console.error('[Seed Error]', err.message);
    }
  }
}

if (process.argv[1] && process.argv[1].endsWith('seed.js')) {
  seedDatabase().then(() => process.exit(0));
}
