import React from 'react';
import { Link } from 'react-router-dom';

export default function Home({ onOpenJoinModal }) {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full bg-surface-container-lowest py-space-xl overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            {/* Text Column */}
            <div className="lg:col-span-6 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-space-xs self-start px-space-sm py-1 rounded-full bg-surface-container text-secondary">
                <span className="material-symbols-outlined text-secondary text-[16px]">school</span>
                <span className="font-label-sm text-label-sm">Built by BBA undergraduates for future business leaders</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight">
                Build Your Career After BBA
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                A student-curated guide to exploring business specializations, mastering essential workplace skills, and landing rewarding undergraduate internships.
              </p>
              <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                <Link 
                  to="/careers" 
                  className="inline-flex items-center justify-center gap-space-xs px-space-lg py-3 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg shadow-sm hover:bg-primary-container transition-all"
                >
                  <span>Explore Careers</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
                <Link 
                  to="/skills-and-internships" 
                  className="inline-flex items-center justify-center gap-space-xs px-space-lg py-3 rounded-lg bg-surface-container-low text-primary font-label-lg text-label-lg hover:bg-surface-container transition-all"
                >
                  <span>Browse Internships</span>
                </Link>
                <button
                  type="button"
                  onClick={onOpenJoinModal}
                  className="inline-flex items-center justify-center gap-space-xs px-space-md py-3 rounded-lg border border-outline-variant text-primary font-label-lg text-label-lg hover:bg-surface-container transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">groups</span>
                  <span>Join Community</span>
                </button>
              </div>

              {/* Quick Stats Micro-bar */}
              <div className="grid grid-cols-3 gap-space-md pt-space-md border-t border-outline-variant/30 mt-2">
                <div className="flex flex-col">
                  <span className="font-headline-md text-headline-md text-primary font-bold">4+</span>
                  <span className="font-label-md text-label-md text-on-surface-variant">Core Majors</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-md text-headline-md text-primary font-bold">120+</span>
                  <span className="font-label-md text-label-md text-on-surface-variant">Vetted Roles</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-md text-headline-md text-primary font-bold">100%</span>
                  <span className="font-label-md text-label-md text-on-surface-variant">Free &amp; Open</span>
                </div>
              </div>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-xl overflow-hidden shadow-lg bg-surface-container-high">
                <img 
                  alt="BBA students collaborating in study space" 
                  className="w-full h-[380px] sm:h-[440px] object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ-QtzZbGwIw15Wbgag3GtnPsGufzRWZqLihe2h0xcP1pvMjLXQ5kfbYjwVTWiqO5RRd7i_oA1mjoajAmpTLTF0G9oZUGXy4v4TAML6dasKZjylg_bLtsGleb7afyVPm_1lz6Ujn48vMmxURwDsbZ5Pge3eT9AS92vioFLyn911rkO-9qRqSPGWxue1t17FogL-yr1Hh4pw-F9RV95o1rmHdjnd4DYdsStGIIRi8fQiWgPDZfpx1Pg4w"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/90 backdrop-blur rounded-lg p-space-sm shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                      <span className="material-symbols-outlined text-[20px]">groups</span>
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-primary">Active Peer Network</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Direct feedback from current cohorts</p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex px-space-xs py-1 rounded bg-surface-container text-secondary font-label-sm text-label-sm">
                    Class of 2025
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Simple Feature Cards Section */}
      <section className="w-full bg-surface-container-low py-space-xl">
        <div className="max-w-[1280px] mx-auto px-margin">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-space-xl">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mb-space-xs">Core Offerings</span>
            <h2 className="font-headline-lg text-headline-lg text-primary">Everything You Need to Step Ahead</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
              Built to dismantle recruiter jargon and provide pragmatic stepping stones for business freshmen and sophomores.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Card 1 */}
            <div className="group bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary mb-space-md group-hover:bg-secondary-container group-hover:text-on-secondary-container transition-colors">
                  <span className="material-symbols-outlined text-[24px]">explore</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">Career Guidance</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Detailed breakdown of top paths like Marketing, Finance, HR, and Analytics to help you choose your major with confidence.
                </p>
              </div>
              <div className="pt-space-lg flex items-center gap-space-xs text-secondary font-label-md text-label-md">
                <Link to="/careers" className="inline-flex items-center gap-space-xs hover:underline">
                  <span>View Specializations</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary mb-space-md group-hover:bg-secondary-container group-hover:text-on-secondary-container transition-colors">
                  <span className="material-symbols-outlined text-[24px]">code_blocks</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">Skill Development</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Practical toolkits including Advanced Excel, business communication, and market research fundamentals.
                </p>
              </div>
              <div className="pt-space-lg flex items-center gap-space-xs text-secondary font-label-md text-label-md">
                <Link to="/skills-and-internships" className="inline-flex items-center gap-space-xs hover:underline">
                  <span>Access Toolkits</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary mb-space-md group-hover:bg-secondary-container group-hover:text-on-secondary-container transition-colors">
                  <span className="material-symbols-outlined text-[24px]">work_history</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">Internship Opportunities</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Curated undergraduate roles and step-by-step guidance on how to ace your first campus placement or summer internship.
                </p>
              </div>
              <div className="pt-space-lg flex items-center gap-space-xs text-secondary font-label-md text-label-md">
                <Link to="/skills-and-internships" className="inline-flex items-center gap-space-xs hover:underline">
                  <span>Explore Roles</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student & Business Spotlight Section */}
      <section className="w-full bg-surface-container-lowest py-space-xl">
        <div className="max-w-[1280px] mx-auto px-margin">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-md">
            <div>
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mb-space-xs">Real-World Context</span>
              <h2 className="font-headline-lg text-headline-lg text-primary">Student &amp; Business Spotlight</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">See how practical exposure shapes successful career transitions.</p>
            </div>
            <div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md">
              <span>Updated Term 2025</span>
              <span className="material-symbols-outlined text-[16px]">verified</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Spotlight Card 1 */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-shadow border border-outline-variant/40">
              <div className="h-48 overflow-hidden bg-surface-container">
                <img 
                  alt="Classroom presentations and case study sessions" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYwB-il2gxyk8b5cIe2m_G23qUV5G1zpb-cz7KH5qFLq7NQUJriaHUzXywvA0NqrHhcoJtdhD9DSRXSOCwisGVr7b3GS5sR1I1zftJrhGEcgTFgoDUxYpKF4w7mySDoJqYMSNyLtcztUlvRG5ivjS5fLm7S2wj8zhTbIJI-P8GXqf1DZXzUPs-qgwahR9-fTp_kU3HbpFDPIbGhHTBesSOX99Ee0xIij8dWlsEz1SFRHKKiZ828EGanQ"
                />
              </div>
              <div className="p-space-md flex flex-col flex-1">
                <span className="font-label-sm text-label-sm text-secondary mb-1">Academic Rigor</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">Classroom Presentations &amp; Case Studies</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant flex-1">
                  Developing public speaking and pitching skills in interactive seminar halls.
                </p>
                <div className="mt-space-md pt-space-xs flex items-center justify-between border-t border-outline-variant/20">
                  <span className="px-space-xs py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface">Campus Focus</span>
                  <span className="material-symbols-outlined text-outline text-[18px]">co_present</span>
                </div>
              </div>
            </div>

            {/* Spotlight Card 2 */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-shadow border border-outline-variant/40">
              <div className="h-48 overflow-hidden bg-surface-container">
                <img 
                  alt="Undergraduate students working together" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ-QtzZbGwIw15Wbgag3GtnPsGufzRWZqLihe2h0xcP1pvMjLXQ5kfbYjwVTWiqO5RRd7i_oA1mjoajAmpTLTF0G9oZUGXy4v4TAML6dasKZjylg_bLtsGleb7afyVPm_1lz6Ujn48vMmxURwDsbZ5Pge3eT9AS92vioFLyn911rkO-9qRqSPGWxue1t17FogL-yr1Hh4pw-F9RV95o1rmHdjnd4DYdsStGIIRi8fQiWgPDZfpx1Pg4w"
                />
              </div>
              <div className="p-space-md flex flex-col flex-1">
                <span className="font-label-sm text-label-sm text-secondary mb-1">Peer Learning</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">Collaborative Group Projects</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant flex-1">
                  Working in diverse student cohorts to analyze live business case studies.
                </p>
                <div className="mt-space-md pt-space-xs flex items-center justify-between border-t border-outline-variant/20">
                  <span className="px-space-xs py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface">Team Dynamics</span>
                  <span className="material-symbols-outlined text-outline text-[18px]">diversity_3</span>
                </div>
              </div>
            </div>

            {/* Spotlight Card 3 */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-shadow border border-outline-variant/40">
              <div className="h-48 bg-primary-container p-space-md flex flex-col justify-between text-on-primary">
                <div className="flex justify-between items-start">
                  <span className="px-space-xs py-1 rounded bg-secondary text-on-secondary font-label-sm text-label-sm">Session Recaps</span>
                  <span className="material-symbols-outlined text-secondary-container text-[24px]">forum</span>
                </div>
                <div>
                  <p className="font-headline-sm text-headline-sm text-white font-bold">Alumni Connect</p>
                  <p className="font-body-sm text-body-sm text-on-primary-container">Weekly speaker summaries</p>
                </div>
              </div>
              <div className="p-space-md flex flex-col flex-1">
                <span className="font-label-sm text-label-sm text-secondary mb-1">Industry Exposure</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">Industry Mentor Workshops</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant flex-1">
                  Alumni and guest speakers sharing practical hiring expectations and interview tips.
                </p>
                <div className="mt-space-md pt-space-xs flex items-center justify-between border-t border-outline-variant/20">
                  <span className="px-space-xs py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface">Mentorship</span>
                  <span className="material-symbols-outlined text-outline text-[18px]">psychology</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="w-full bg-surface-container-lowest py-space-xl">
        <div className="max-w-[1280px] mx-auto px-margin">
          <div className="bg-primary rounded-xl p-space-lg sm:p-space-xl text-on-primary relative overflow-hidden shadow-md">
            <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-secondary opacity-20 pointer-events-none"></div>
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
              <div className="max-w-2xl">
                <span className="px-space-sm py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm inline-block mb-space-sm">
                  Ready to take the first step?
                </span>
                <h2 className="font-headline-lg text-headline-lg text-white mb-space-xs">
                  Explore Targeted Career Pathways
                </h2>
                <p className="font-body-lg text-body-lg text-on-primary-container">
                  Review syllabus alignments, entry-level interview questions, and placement roadmaps compiled by students who made it.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm shrink-0">
                <Link 
                  to="/careers" 
                  className="px-space-lg py-3 rounded-lg bg-secondary text-on-secondary font-label-lg text-label-lg text-center shadow-sm hover:opacity-95 transition-opacity"
                >
                  View All Pathways
                </Link>
                <Link 
                  to="/skills-and-internships" 
                  className="px-space-lg py-3 rounded-lg bg-surface-container-lowest text-primary font-label-lg text-label-lg text-center hover:bg-surface-container transition-colors"
                >
                  Internship Board
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
