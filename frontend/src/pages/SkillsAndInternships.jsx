import React, { useState, useEffect } from 'react';
import { fetchInternships } from '../services/api';

export default function SkillsAndInternships({ onApplyInternship }) {
  const [activeSkillFilter, setActiveSkillFilter] = useState('All 5 Disciplines');
  const [activeBoardTrack, setActiveBoardTrack] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBoard() {
      setLoading(true);
      const data = await fetchInternships(activeBoardTrack, searchQuery);
      if (data) {
        setInternships(data);
      } else {
        // Local fallback internships array
        const local = [
          {
            _id: '1',
            company: 'Apex Consumer Goods Co.',
            initial: 'A',
            roleTitle: 'Brand Strategy & Growth Trainee',
            track: 'Marketing',
            location: 'Chicago, IL (Hybrid)',
            stipend: '$3,800 / mo',
            duration: '10 Weeks (Summer)',
            deadlineStatus: 'Rolling Intake',
            type: 'Summer Internship',
            description: 'Collaborate with senior brand managers on market research, consumer segmentation, and omnichannel campaign deployment.'
          },
          {
            _id: '2',
            company: 'Nexus Capital Partners',
            initial: 'N',
            roleTitle: 'Summer Financial Analyst',
            track: 'Finance',
            location: 'New York, NY (On-site)',
            stipend: '$5,200 / mo',
            duration: '12 Weeks (Summer)',
            deadlineStatus: 'Closes Apr 30',
            type: 'Summer Internship',
            description: 'Conduct corporate valuation models, financial statement spreads, and pitch deck research for investment committees.'
          },
          {
            _id: '3',
            company: 'Horizon Tech Solutions',
            initial: 'H',
            roleTitle: 'Junior Data & BI Analyst',
            track: 'Business Analytics',
            location: 'Austin, TX (Remote)',
            stipend: '$4,500 / mo',
            duration: '10 Weeks (Summer)',
            deadlineStatus: 'Priority Deadline',
            type: 'Summer Internship',
            description: 'Transform raw product event logs into automated SQL pipelines and Tableau executive dashboards.'
          },
          {
            _id: '4',
            company: 'Vanguard People Operations',
            initial: 'V',
            roleTitle: 'Talent Acquisition & HR Trainee',
            track: 'Human Resources',
            location: 'Boston, MA (Hybrid)',
            stipend: '$3,400 / mo',
            duration: '8 Weeks (Summer)',
            deadlineStatus: 'Rolling Intake',
            type: 'Summer Internship',
            description: 'Coordinate university recruiting programs, optimize ATS applicant flows, and design DE&I onboarding workshops.'
          },
          {
            _id: '5',
            company: 'Elevate Enterprise SaaS',
            initial: 'E',
            roleTitle: 'B2B Sales & Account Representative',
            track: 'Sales',
            location: 'San Francisco, CA (Hybrid)',
            stipend: '$4,000 / mo + Commission',
            duration: '12 Weeks (Summer)',
            deadlineStatus: 'Open Now',
            type: 'Summer Internship',
            description: 'Research prospective accounts, conduct consultative lead discovery calls, and manage Salesforce CRM pipelines.'
          },
          {
            _id: '6',
            company: 'InnovateX Ventures',
            initial: 'I',
            roleTitle: 'Venture Operations Trainee',
            track: 'Entrepreneurship',
            location: 'Seattle, WA (On-site)',
            stipend: '$3,900 / mo',
            duration: '10 Weeks (Summer)',
            deadlineStatus: 'Closes May 15',
            type: 'Summer Internship',
            description: 'Work directly alongside early-stage startup founders on competitive benchmarking, MVP launches, and pitch decks.'
          }
        ];

        let filtered = local;
        if (activeBoardTrack !== 'All') {
          filtered = filtered.filter(i => i.track.toLowerCase() === activeBoardTrack.toLowerCase());
        }
        if (searchQuery) {
          const q = searchQuery.toLowerCase();
          filtered = filtered.filter(i => 
            i.roleTitle.toLowerCase().includes(q) || 
            i.company.toLowerCase().includes(q) ||
            i.description.toLowerCase().includes(q)
          );
        }
        setInternships(filtered);
      }
      setLoading(false);
    }
    loadBoard();
  }, [activeBoardTrack, searchQuery]);

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Sub-Banner */}
      <section className="w-full bg-surface-container-low py-space-xl px-margin border-b border-outline-variant/30">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-space-lg">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container text-secondary font-label-sm text-label-sm mb-space-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              Recruiting Readiness 2025
            </div>
            <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight mb-space-xs font-bold">
              Skills &amp; Internships Roadmap
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Bridging academic theory with market-ready capabilities. Master the highest-ROI competencies demanded by top employers and explore verified collegiate summer tracks.
            </p>
          </div>

          <div className="flex items-center gap-space-lg bg-surface-container-lowest p-space-md rounded-xl shadow-sm border border-outline-variant/40">
            <div className="flex flex-col">
              <span className="font-headline-md text-headline-md text-primary font-bold">5 Core</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">Proficiency Modules</span>
            </div>
            <div className="w-px h-8 bg-surface-container-highest"></div>
            <div className="flex flex-col">
              <span className="font-headline-md text-headline-md text-secondary font-bold">100%</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">Stipend-Verified</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: IN-DEMAND CORE SKILLS */}
      <section className="w-full py-space-xl px-margin">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm pb-space-xs">
            <div>
              <div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md uppercase tracking-wider mb-space-xs font-semibold">
                <span className="material-symbols-outlined text-[16px]">school</span>
                Curriculum Alignment
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">
                Essential Skills for Business Graduates
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs max-w-2xl">
                Practical proficiencies recruiters look for during on-campus drives and undergraduate hiring.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-space-xs">
              {['All 5 Disciplines', 'Technical & Quant', 'Executive & Soft'].map((opt) => (
                <button
                  key={opt}
                  onClick={() => setActiveSkillFilter(opt)}
                  className={`px-space-md py-space-xs rounded-full font-label-sm text-label-sm transition-all cursor-pointer ${
                    activeSkillFilter === opt
                      ? 'bg-primary text-on-primary shadow-sm scale-105'
                      : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
            {/* Skill 1 */}
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/40 hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-space-sm mb-space-md">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px]">record_voice_over</span>
                  </div>
                  <span className="px-space-sm py-space-xs rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
                    Intermediate
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs font-bold">
                  Communication &amp; Pitching
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                  Professional business writing, executive deck presentations, persuasive pitching, and cross-functional team coordination.
                </p>
              </div>
              <div className="pt-space-md border-t border-outline-variant/20">
                <span className="font-label-sm text-label-sm text-on-surface-variant block mb-space-xs uppercase tracking-wide font-semibold">
                  Free Learning Track
                </span>
                <div className="flex items-center gap-space-xs flex-wrap">
                  <span className="inline-flex items-center gap-1 text-secondary font-label-sm text-label-sm bg-surface-container px-space-sm py-space-xs rounded-full">
                    <span className="material-symbols-outlined text-[14px]">play_circle</span> LinkedIn Learning
                  </span>
                  <span className="inline-flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm bg-surface-container-low px-space-sm py-space-xs rounded-full">
                    Coursera Specialization
                  </span>
                </div>
              </div>
            </div>

            {/* Skill 2 */}
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/40 hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-space-sm mb-space-md">
                  <div className="w-10 h-10 rounded-lg bg-secondary-fixed text-secondary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px]">table_chart</span>
                  </div>
                  <span className="px-space-sm py-space-xs rounded-full bg-secondary-fixed text-secondary font-label-sm text-label-sm font-semibold">
                    Advanced
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs font-bold">
                  Excel &amp; Data Modeling
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                  Mastering VLOOKUP/XLOOKUP, Pivot Tables, financial forecasting functions, and data visualization summaries.
                </p>
              </div>
              <div className="pt-space-md border-t border-outline-variant/20">
                <span className="font-label-sm text-label-sm text-on-surface-variant block mb-space-xs uppercase tracking-wide font-semibold">
                  Free Learning Track
                </span>
                <div className="flex items-center gap-space-xs flex-wrap">
                  <span className="inline-flex items-center gap-1 text-secondary font-label-sm text-label-sm bg-surface-container px-space-sm py-space-xs rounded-full">
                    <span className="material-symbols-outlined text-[14px]">smart_display</span> YouTube (Chandoo)
                  </span>
                  <span className="inline-flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm bg-surface-container-low px-space-sm py-space-xs rounded-full">
                    Coursera (Macquarie)
                  </span>
                </div>
              </div>
            </div>

            {/* Skill 3 */}
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/40 hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-space-sm mb-space-md">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px]">hub</span>
                  </div>
                  <span className="px-space-sm py-space-xs rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">
                    Beginner
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs font-bold">
                  Digital Marketing &amp; GA4
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                  Search engine optimization (SEO), performance marketing, Google Analytics 4, email automation, and content strategy.
                </p>
              </div>
              <div className="pt-space-md border-t border-outline-variant/20">
                <span className="font-label-sm text-label-sm text-on-surface-variant block mb-space-xs uppercase tracking-wide font-semibold">
                  Free Learning Track
                </span>
                <div className="flex items-center gap-space-xs flex-wrap">
                  <span className="inline-flex items-center gap-1 text-secondary font-label-sm text-label-sm bg-surface-container px-space-sm py-space-xs rounded-full">
                    <span className="material-symbols-outlined text-[14px]">verified</span> Google Skillshop
                  </span>
                  <span className="inline-flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm bg-surface-container-low px-space-sm py-space-xs rounded-full">
                    HubSpot Academy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECRUITER TIP BANNER */}
      <section className="w-full bg-surface-container px-margin py-space-lg border-y border-outline-variant/30">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-on-primary text-[24px]">lightbulb</span>
            </div>
            <div>
              <h4 className="font-headline-sm text-headline-sm text-primary font-bold">Senior Student Tip for Summer '25</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Pair one analytical skill (Data/Excel) with one presentation skill before sending out applications.</p>
            </div>
          </div>
          <button 
            onClick={() => alert("Skill Checklist (PDF) compilation downloaded!")} 
            className="px-space-md py-space-xs rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md shadow-sm hover:shadow transition-all shrink-0 cursor-pointer"
          >
            Download Skill Checklist (PDF)
          </button>
        </div>
      </section>

      {/* SECTION 2: VERIFIED RECRUITING BOARD */}
      <section className="w-full py-space-xl px-margin bg-surface-container-lowest">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
            <div>
              <div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md uppercase tracking-wider mb-space-xs font-semibold">
                <span className="material-symbols-outlined text-[16px]">work_history</span>
                Verified Recruiting Board
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">
                Featured Internship Openings
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                Curated summer internships and part-time trainee roles for undergraduate students.
              </p>
            </div>

            {/* Search & Filter Controls */}
            <div className="flex flex-col sm:flex-row items-center gap-space-sm w-full md:w-auto">
              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  placeholder="Search role or company..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-lg bg-surface-container-low text-body-sm focus:outline-none border border-outline-variant/60"
                />
                <span className="material-symbols-outlined text-[18px] text-outline absolute left-2.5 top-2.5">
                  search
                </span>
              </div>
              <select
                value={activeBoardTrack}
                onChange={(e) => setActiveBoardTrack(e.target.value)}
                className="w-full sm:w-auto px-4 py-2 rounded-lg bg-surface-container-low text-body-sm font-label-md border border-outline-variant/60 focus:outline-none"
              >
                <option value="All">All Tracks</option>
                <option value="Marketing">Marketing</option>
                <option value="Finance">Finance</option>
                <option value="Human Resources">Human Resources</option>
                <option value="Business Analytics">Business Analytics</option>
                <option value="Sales">Sales</option>
                <option value="Entrepreneurship">Entrepreneurship</option>
              </select>
            </div>
          </div>

          {/* Internship Cards */}
          {loading ? (
            <div className="text-center py-12 text-on-surface-variant">Loading internship board...</div>
          ) : internships.length === 0 ? (
            <div className="text-center py-12 bg-surface-container-low rounded-xl text-on-surface-variant">
              No internships match your filter criteria. Try adjusting your search query or track selector.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
              {internships.map((job) => (
                <div 
                  key={job._id || job.roleTitle} 
                  className="bg-surface-container-low/50 rounded-xl p-space-lg border border-outline-variant/50 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-space-sm mb-space-md">
                      <div className="flex items-center gap-space-sm">
                        <div className="w-12 h-12 rounded-lg bg-primary text-on-primary flex items-center justify-center font-headline-sm font-bold text-[20px]">
                          {job.initial || job.company.charAt(0)}
                        </div>
                        <div>
                          <span className="font-label-sm text-label-sm text-on-surface-variant block">{job.company}</span>
                          <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> {job.deadlineStatus}
                          </span>
                        </div>
                      </div>
                      <span className="px-space-xs py-1 rounded bg-surface-container text-primary font-label-sm font-semibold">
                        {job.track}
                      </span>
                    </div>

                    <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs font-bold">
                      {job.roleTitle}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                      {job.description}
                    </p>

                    <div className="flex flex-col gap-1 text-body-sm text-on-surface font-medium bg-surface-container-lowest p-space-sm rounded-lg mb-space-md">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[16px] text-secondary">location_on</span>
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[16px] text-secondary">payments</span>
                        <span>{job.stipend} ({job.duration})</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onApplyInternship(job)}
                    className="w-full py-space-sm rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md transition-colors cursor-pointer flex items-center justify-center gap-space-xs shadow-sm"
                  >
                    <span>Apply Now</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
