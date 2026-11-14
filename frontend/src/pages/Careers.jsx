import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCareerTracks } from '../services/api';

export default function Careers() {
  const [activeFilter, setActiveFilter] = useState('All Tracks');
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);

  const filterOptions = [
    'All Tracks',
    'Analytical & Quant',
    'Client & Growth',
    'People & Culture',
    'Venture & Innovation'
  ];

  useEffect(() => {
    async function loadTracks() {
      setLoading(true);
      const data = await fetchCareerTracks(activeFilter);
      if (data) {
        setTracks(data);
      } else {
        // Local fallback tracks array if API offline
        const local = [
          {
            slug: 'marketing',
            trackNumber: 'Track 01',
            title: 'Marketing',
            category: 'Client & Growth',
            icon: 'campaign',
            description: 'Lead campaign strategy, brand management, consumer psychology, and market expansion for emerging brands and MNCs.',
            entryRoles: ['Marketing Associate', 'Brand Coordinator', 'Digital Strategist'],
            competencies: ['Omnichannel CRM', 'Attribution Models', 'Social Listening'],
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAO8nGfyCAEJIYQGwH6JqDLAu42m0m_XdN14UyYX0EDQZACEG1_my6R6_6ojUseWaOPUKLtnx5q5xRgDuqtL6WqV6R4hNH1pfnG5prNy9st33rNupbaKCyu9IP1is6dcUv20V5jfKgahxh03jkoY0i225HL13Ml5hPYfn-u9bzANqYr_5ESKynMi2WUHI1J2H1ZGBgt3n36x2Y-6v6yIVZ5HKOwOTlHfMuql6rF7PtP0m6R0IdU2SkJg'
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
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBkwrDzl-qaKHyKumFmUkzDaWMdCRICdLuXQN27jY1iA33vlG7yWTPKqm24ZB9NNUBBTgD3CxHWGSlrzWIlM8RDvfp7L8MKbrQzT_INReaTlgKvE33F520rDdadi5CbJi5Oplv1Fx-ZG3DMrZVogq7syY3e-hsYU3lzJeyRiM2ZEIxQWVHBtvfNx-iVhdh8w2hGZSWziexL-Gag9hN5Nffo_tmCS09rmaVWF7SWI5Qq77kZ9VYPzXl6w'
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
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuvKmGg078d3XTWCX0isU9leriGx9Whd7y4olsI07fN6E4j8fJe5nIkNClyD6eAydeKB5TXj7HN1OnFWFFjKa-8pchbkJ6ygu0xkyIJxHwq33tq1wb5o2gQQ3FpgKyFY6gwjCNhynJyQzV4hklPhWZhLa0eIOj9mOA856gU5YuKv45IDcMTLR7rKuxSzjwEcKjpDaPbvGhX8-A0EqPYHoOhgzaj9b0UFhQD0ORt93PskAULhHxoEEMWA'
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
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABSSy7rUwYEnIvIkoHZexrYhNh5FrFvz3kZwa4XDsP1TGNa8P1wWAKISVQ_eWq6ySbFpG9aWUYawEkaZWY27lfl_JgL0vh5cyNMxJN-OGY0zGolT0rProCgPtX-_F9Hf8DcNfIZeg4_I1mfzYE8GdMVKwY_EeYEZTtKxQ5vMoX9Y63bfWaOhmEHfCfL2RRmzzZvs9pnjBAHdPFSN_SYgxBRMboelsm5P4rg0SxuDNhABOj4r5-hz5OzA'
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
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7_Y7BvgDR1fxqNS18B2x2xM4MCRc4KoK1bIYMYNR5FZPkSK-FacTefiZDLBxb105SbYnrL9qNMWd5tm8LUdBt-pTLfxi_urPCzLX3Ien6TFXeKFURZ-An9i5gGhPfOK1pY_HE7EpVKswInUXxSyrVfD7keXUNgyFDaAc5wkbOwB67eKOMhwHLtwA61wjvi64MS3jXVIHw8sDtuVku4vsCfoUYIrH9iTkc8pAlaszbgyeU4pLlgAum7w'
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
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATgjZwS_XC_k7toBVNSaNrb5S4ej-xbsJcknLkmZuq7XoJnsb6aCgJpiKKMt0qSbHC_jthYdVKPCNCSJVnT0aMKqKrNmIkICxk2WQ4NFOgaliBhRPDYmSTvyJ99BkYRGWZ24DnMidi5u7tgcrmt_ac2iXRxzj49YA-k-TBJ69BnH2k3fn52HUr5QfJ8_fr9fgmRYfRnj_kGNx1IGBQ7IzUGLTZaYajmul3e2TnhdGV9gVtMh5htqVZ4w'
          }
        ];
        if (activeFilter === 'All Tracks') {
          setTracks(local);
        } else {
          setTracks(local.filter(t => t.category === activeFilter));
        }
      }
      setLoading(false);
    }
    loadTracks();
  }, [activeFilter]);

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Header Banner */}
      <div className="relative w-full overflow-hidden bg-gradient-to-b from-surface-container-low via-surface-container-lowest to-surface-container-lowest">
        <div className="absolute -top-32 -left-24 w-96 h-96 rounded-full bg-secondary-container/15 blur-3xl pointer-events-none"></div>
        <div className="absolute top-8 right-0 w-80 h-80 rounded-full bg-primary-fixed/30 blur-3xl pointer-events-none"></div>
        
        <div className="max-w-[1280px] mx-auto px-margin pt-space-xl pb-space-lg relative z-10">
          <div className="flex items-center gap-space-sm mb-space-md">
            <span className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container text-secondary font-label-sm text-label-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-container animate-pulse"></span>
              Recruitment &amp; Trajectory Guide
            </span>
            <span className="text-on-surface-variant font-label-sm text-label-sm">•</span>
            <span className="text-on-surface-variant font-label-sm text-label-sm">Class of 2025–2028 Edition</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
            <div className="max-w-3xl">
              <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight font-bold">
                Explore BBA Career Pathways
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-sm leading-relaxed">
                Discover where your Bachelor of Business Administration degree can take you. Explore core industry functions, entry-level job titles, and essential competencies required to excel in modern enterprise.
              </p>
            </div>

            <div className="flex items-center gap-space-md py-space-sm px-space-md bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/40 self-start lg:self-auto">
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Tracks Mapped</span>
                <span className="font-headline-sm text-headline-sm text-primary font-bold">6 Verticals</span>
              </div>
              <div className="w-px h-8 bg-surface-variant"></div>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Placement Rate</span>
                <span className="font-headline-sm text-headline-sm text-secondary font-bold">94.8%</span>
              </div>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-space-xs mt-space-lg">
            <span className="font-label-md text-label-md text-on-surface-variant mr-space-xs font-semibold">Filter Lens:</span>
            {filterOptions.map((option) => {
              const active = activeFilter === option;
              return (
                <button
                  key={option}
                  onClick={() => setActiveFilter(option)}
                  className={`px-space-md py-space-xs rounded-full font-label-sm text-label-sm transition-all cursor-pointer ${
                    active
                      ? 'bg-primary text-on-primary shadow-sm scale-105'
                      : 'bg-surface-container hover:bg-surface-variant text-on-surface'
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <section className="max-w-[1280px] mx-auto px-margin py-space-xl w-full">
        {loading ? (
          <div className="text-center py-12 text-on-surface-variant font-label-md">Loading career tracks...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {tracks.map((track) => (
              <article 
                key={track.slug} 
                className="group flex flex-col bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md border border-outline-variant/40 transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 w-full overflow-hidden bg-surface-container">
                  <img 
                    src={track.image} 
                    alt={track.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-space-sm left-space-sm">
                    <span className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container-lowest/95 backdrop-blur-sm text-secondary font-label-sm text-label-sm shadow-sm">
                      <span className="material-symbols-outlined text-[14px]">{track.icon}</span>
                      {track.category}
                    </span>
                  </div>

                  <div className="absolute bottom-space-sm left-space-sm right-space-sm text-on-primary">
                    <span className="font-label-sm text-label-sm opacity-80 uppercase tracking-widest">{track.trackNumber}</span>
                    <h2 className="font-headline-sm text-headline-sm text-on-primary font-bold">{track.title}</h2>
                  </div>
                </div>

                <div className="p-space-lg flex flex-col flex-1 justify-between">
                  <div>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {track.description}
                    </p>

                    <div className="mt-space-md p-space-sm bg-surface-container-low rounded-lg">
                      <span className="block font-label-sm text-label-sm text-secondary uppercase tracking-wider mb-space-xs font-semibold">
                        Typical Entry-Level Roles
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface font-medium">
                        {track.entryRoles ? track.entryRoles.join(' • ') : 'Entry level associate roles'}
                      </p>
                    </div>

                    <div className="mt-space-md flex flex-wrap gap-space-xs">
                      {track.competencies && track.competencies.map((comp, idx) => (
                        <span key={idx} className="px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-space-lg pt-space-md border-t border-outline-variant/30 flex items-center justify-between">
                    <Link
                      to={`/careers/${track.slug}`}
                      className="w-full inline-flex items-center justify-center gap-space-xs px-space-md py-space-sm rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm cursor-pointer"
                    >
                      <span>Learn More &amp; Roadmap</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
