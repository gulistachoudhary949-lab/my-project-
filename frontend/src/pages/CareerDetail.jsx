import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchCareerTrackBySlug } from '../services/api';

export default function CareerDetail() {
  const { slug } = useParams();
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTrack() {
      setLoading(true);
      const data = await fetchCareerTrackBySlug(slug);
      if (data) {
        setTrack(data);
      } else {
        // Fallback mock detail data
        setTrack({
          slug,
          trackNumber: 'Specialized Track',
          title: slug.charAt(0).toUpperCase() + slug.slice(1),
          category: 'Core Major',
          icon: 'stars',
          description: `Comprehensive undergraduate guide for building a high-impact career in ${slug}.`,
          entryRoles: ['Associate Specialist', 'Junior Analyst', 'Rotational Trainee'],
          competencies: ['Strategic Analysis', 'Data Modeling', 'Stakeholder Pitching'],
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAO8nGfyCAEJIYQGwH6JqDLAu42m0m_XdN14UyYX0EDQZACEG1_my6R6_6ojUseWaOPUKLtnx5q5xRgDuqtL6WqV6R4hNH1pfnG5prNy9st33rNupbaKCyu9IP1is6dcUv20V5jfKgahxh03jkoY0i225HL13Ml5hPYfn-u9bzANqYr_5ESKynMi2WUHI1J2H1ZGBgt3n36x2Y-6v6yIVZ5HKOwOTlHfMuql6rF7PtP0m6R0IdU2SkJg'
        });
      }
      setLoading(false);
    }
    loadTrack();
  }, [slug]);

  if (loading) {
    return <div className="text-center py-24 text-on-surface-variant">Loading career track details...</div>;
  }

  if (!track) {
    return (
      <div className="max-w-[1280px] mx-auto px-margin py-24 text-center">
        <h2 className="font-headline-lg text-primary">Track Not Found</h2>
        <Link to="/careers" className="text-secondary hover:underline mt-4 inline-block font-label-md">
          ← Back to Careers Board
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Header Banner */}
      <section className="bg-surface-container-low py-space-xl border-b border-outline-variant/30">
        <div className="max-w-[1280px] mx-auto px-margin">
          <Link to="/careers" className="inline-flex items-center gap-space-xs text-secondary font-label-md mb-space-md hover:underline">
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            Back to All Career Tracks
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
            <div className="max-w-2xl">
              <span className="px-space-sm py-1 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm inline-block mb-space-xs">
                {track.trackNumber} • {track.category}
              </span>
              <h1 className="font-headline-xl text-headline-xl text-primary font-bold">
                {track.title} Career Pathway
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-sm leading-relaxed">
                {track.description}
              </p>
            </div>

            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm border border-outline-variant/40 flex flex-col gap-space-sm min-w-[280px]">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">Average Starting Range</span>
              <span className="font-headline-lg text-headline-lg text-primary font-bold">$65,000 – $92,000 / yr</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">Based on recent BBA campus placement benchmarks</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-[1280px] mx-auto px-margin py-space-xl grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
        {/* Left Column: Roadmap & Skills */}
        <div className="lg:col-span-8 flex flex-col gap-space-xl">
          {/* Day in Life */}
          <div className="bg-surface-container-lowest p-space-lg rounded-2xl border border-outline-variant/40 shadow-sm">
            <h2 className="font-headline-md text-headline-md text-primary mb-space-sm font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">schedule</span>
              Day in the Life of a Junior {track.title} Associate
            </h2>
            <div className="flex flex-col gap-space-md mt-space-md">
              <div className="flex gap-space-md p-space-sm bg-surface-container-low rounded-xl">
                <span className="font-label-md text-secondary font-bold shrink-0 w-20">09:00 AM</span>
                <p className="font-body-sm text-on-surface-variant">Team standup review, tracking campaign performance metrics, and updating team project boards.</p>
              </div>
              <div className="flex gap-space-md p-space-sm bg-surface-container-low rounded-xl">
                <span className="font-label-md text-secondary font-bold shrink-0 w-20">11:30 AM</span>
                <p className="font-body-sm text-on-surface-variant">Data modeling, cross-referencing industry databases, and building executive deck slides.</p>
              </div>
              <div className="flex gap-space-md p-space-sm bg-surface-container-low rounded-xl">
                <span className="font-label-md text-secondary font-bold shrink-0 w-20">02:30 PM</span>
                <p className="font-body-sm text-on-surface-variant">Cross-functional meeting with product, sales, and analytics stakeholders to align deliverables.</p>
              </div>
            </div>
          </div>

          {/* Sample Interview Questions */}
          <div className="bg-surface-container-lowest p-space-lg rounded-2xl border border-outline-variant/40 shadow-sm">
            <h2 className="font-headline-md text-headline-md text-primary mb-space-md font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">help_outline</span>
              Top Campus Interview Questions for {track.title}
            </h2>
            <ul className="flex flex-col gap-space-sm">
              <li className="p-space-md bg-surface-container-low rounded-xl font-body-sm text-on-surface">
                1. "Walk me through a recent case study or market trend you analyzed in class."
              </li>
              <li className="p-space-md bg-surface-container-low rounded-xl font-body-sm text-on-surface">
                2. "How would you handle a situation where data conflicts with team intuition?"
              </li>
              <li className="p-space-md bg-surface-container-low rounded-xl font-body-sm text-on-surface">
                3. "Which tools (Excel, SQL, CRM) have you used for real project work?"
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Key Skills & Action Card */}
        <div className="lg:col-span-4 flex flex-col gap-space-lg">
          <div className="bg-primary text-on-primary p-space-lg rounded-2xl shadow-md flex flex-col gap-space-md">
            <h3 className="font-headline-sm text-headline-sm text-white font-bold">Recommended Electives</h3>
            <ul className="flex flex-col gap-2 font-body-sm text-on-primary-container">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary-container text-[18px]">check_circle</span>
                Advanced Business Excel &amp; Financial Modeling
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary-container text-[18px]">check_circle</span>
                Managerial Economics &amp; Strategy
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary-container text-[18px]">check_circle</span>
                Consumer Behavior &amp; Market Analytics
              </li>
            </ul>

            <Link
              to="/skills-and-internships"
              className="w-full py-space-sm bg-secondary text-on-secondary font-label-md text-center rounded-lg hover:opacity-90 transition-opacity mt-space-sm"
            >
              Find {track.title} Internships
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
