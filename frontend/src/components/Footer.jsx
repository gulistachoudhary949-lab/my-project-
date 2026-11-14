import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer({ onOpenJoinModal }) {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant">
      <div className="max-w-[1280px] mx-auto px-margin py-space-xl flex flex-col gap-space-xl">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-space-lg">
          <div className="max-w-md">
            <div className="flex items-center gap-space-sm mb-space-xs">
              <span className="font-headline-sm text-headline-sm text-primary font-bold">
                BBA Career Hub
              </span>
              <span className="px-space-sm py-space-xs rounded-full bg-surface-container text-secondary font-label-sm text-label-sm">
                Undergraduate Portal
              </span>
            </div>
            <p className="text-on-surface-variant font-body-sm text-body-sm leading-relaxed">
              A student-led career guidance initiative dedicated to equipping business undergraduates with transparent recruiting roadmaps, alumni mentorship, and verified internship pathways.
            </p>
          </div>

          <div className="flex flex-wrap gap-space-xl">
            <div className="flex flex-col gap-space-sm">
              <span className="font-label-md text-label-md text-primary uppercase tracking-wider font-semibold">
                Navigation
              </span>
              <Link to="/" className="text-on-surface-variant hover:text-on-surface font-body-sm text-body-sm transition-colors">
                Home
              </Link>
              <Link to="/careers" className="text-on-surface-variant hover:text-on-surface font-body-sm text-body-sm transition-colors">
                Careers
              </Link>
              <Link to="/skills-and-internships" className="text-on-surface-variant hover:text-on-surface font-body-sm text-body-sm transition-colors">
                Skills &amp; Internships
              </Link>
              <Link to="/about-us" className="text-on-surface-variant hover:text-on-surface font-body-sm text-body-sm transition-colors">
                About Us
              </Link>
            </div>

            <div className="flex flex-col gap-space-sm">
              <span className="font-label-md text-label-md text-primary uppercase tracking-wider font-semibold">
                Contact &amp; Connect
              </span>
              <a href="mailto:team@bbacareerhub.org" className="text-on-surface-variant hover:text-on-surface font-body-sm text-body-sm transition-colors">
                team@bbacareerhub.org
              </a>
              <button 
                onClick={onOpenJoinModal} 
                className="text-left text-on-surface-variant hover:text-on-surface font-body-sm text-body-sm transition-colors cursor-pointer"
              >
                Student Community Slack
              </button>
              <Link to="/about-us" className="text-on-surface-variant hover:text-on-surface font-body-sm text-body-sm transition-colors">
                Peer Advisory Office Hours
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-space-md border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant font-body-sm text-body-sm">
          <p>Created by BBA Students for BBA Students. Academic Project 2025.</p>
          <p>© 2025 BBA Career Hub. Non-profit collegiate resource.</p>
        </div>
      </div>
    </footer>
  );
}
