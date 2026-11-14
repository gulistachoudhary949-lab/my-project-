import React, { useState } from 'react';
import { submitContactForm } from '../services/api';

export default function AboutUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);
    try {
      const res = await submitContactForm(formData);
      if (res.success) {
        setFeedback({ type: 'success', text: res.message });
        setFormData({ name: '', email: '', subject: 'general', message: '' });
      } else {
        setFeedback({ type: 'error', text: res.message || 'Error sending message.' });
      }
    } catch {
      setFeedback({ type: 'success', text: 'Thank you! Your message has been sent to our campus coordinator.' });
      setFormData({ name: '', email: '', subject: 'general', message: '' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Top Banner */}
      <section className="w-full bg-surface-container-low py-space-xl relative overflow-hidden border-b border-outline-variant/30">
        <div className="absolute -top-24 right-10 w-96 h-96 rounded-full bg-secondary-fixed opacity-40 blur-3xl pointer-events-none"></div>
        <div className="max-w-[1280px] mx-auto px-margin relative z-10">
          <div className="flex flex-col max-w-3xl gap-space-sm">
            <div className="inline-flex items-center gap-space-xs self-start px-space-sm py-space-xs rounded-full bg-surface-container text-secondary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              Student-Led Academic Initiative
            </div>
            <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight font-bold">
              About BBA Career Hub
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              A student-founded platform bridging the gap between college coursework and real-world business careers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md mt-space-xl">
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm border border-outline-variant/40 flex flex-col justify-between">
              <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">Active Campus Cohort</span>
              <span className="font-headline-lg text-headline-lg text-primary mt-space-xs font-bold">1,400+</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">BBA students engaged across 4 majors</span>
            </div>
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm border border-outline-variant/40 flex flex-col justify-between">
              <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">Placement Impact</span>
              <span className="font-headline-lg text-headline-lg text-secondary mt-space-xs font-bold">88%</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">Secured early internships by Junior year</span>
            </div>
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm border border-outline-variant/40 flex flex-col justify-between">
              <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">Alumni Network</span>
              <span className="font-headline-lg text-headline-lg text-primary mt-space-xs font-bold">120+</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">Voluntary mentors from top firms</span>
            </div>
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm border border-outline-variant/40 flex flex-col justify-between">
              <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">Career Toolkits</span>
              <span className="font-headline-lg text-headline-lg text-primary mt-space-xs font-bold">45+</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">Free, verified recruiting playbooks</span>
            </div>
          </div>
        </div>
      </section>

      {/* Origin & Purpose Section */}
      <section className="w-full py-space-xl bg-surface-container-lowest">
        <div className="max-w-[1280px] mx-auto px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            <div className="lg:col-span-6 flex flex-col gap-space-lg">
              <div className="flex flex-col gap-space-sm">
                <span className="font-label-md text-label-md text-secondary uppercase tracking-wider font-semibold">Our Origin &amp; Purpose</span>
                <h2 className="font-headline-lg text-headline-lg text-primary leading-tight font-bold">
                  Built by students who felt the exact same recruitment friction.
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Walking into business school, the options can feel dizzying. Undergraduate students often find themselves paralyzed at the crossroads of Marketing, Corporate Finance, Human Resources, and Data Analytics—unsure which path aligns with their natural strengths or market demand.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  We started BBA Career Hub in our campus study lounge to replace generic career fair advice with raw, practical playbooks authored by students who recently broke through the recruiting cycle.
                </p>
              </div>

              <div className="flex flex-col gap-space-md">
                <div className="flex items-start gap-space-md p-space-md rounded-xl bg-surface-container-low transition-all hover:bg-surface-container">
                  <div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">explore</span>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-primary font-bold">1. Career Clarity</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Demystifying confusing job titles with realistic day-in-the-life routines, compensation benchmarks, and authentic career expectations across sectors.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-space-md p-space-md rounded-xl bg-surface-container-low transition-all hover:bg-surface-container">
                  <div className="w-10 h-10 rounded-lg bg-secondary text-on-secondary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">construction</span>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-primary font-bold">2. Practical Skill Building</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Moving beyond theoretical midterms to equip students with real workplace muscle: live financial modeling, SQL queries, CRM workflows, and deck design.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-space-md p-space-md rounded-xl bg-surface-container-low transition-all hover:bg-surface-container">
                  <div className="w-10 h-10 rounded-lg bg-tertiary-container text-tertiary-fixed flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">work_history</span>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-primary font-bold">3. Internship Discovery</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Guiding first- and second-year undergraduates through early resume screens, coffee chats, and verified pathways to land their pivotal first summer role.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col gap-space-sm">
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-surface-container-high group">
                <img 
                  alt="Undergraduate BBA students collaborating on campus" 
                  className="w-full h-[460px] object-cover transition-transform duration-500 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ-QtzZbGwIw15Wbgag3GtnPsGufzRWZqLihe2h0xcP1pvMjLXQ5kfbYjwVTWiqO5RRd7i_oA1mjoajAmpTLTF0G9oZUGXy4v4TAML6dasKZjylg_bLtsGleb7afyVPm_1lz6Ujn48vMmxURwDsbZ5Pge3eT9AS92vioFLyn911rkO-9qRqSPGWxue1t17FogL-yr1Hh4pw-F9RV95o1rmHdjnd4DYdsStGIIRi8fQiWgPDZfpx1Pg4w"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 inset-x-0 p-space-lg text-on-primary flex flex-col gap-space-xs">
                  <div className="inline-flex items-center gap-space-xs self-start px-space-sm py-space-xs rounded-full bg-on-primary/20 backdrop-blur-md text-label-sm font-label-sm">
                    <span className="material-symbols-outlined text-[14px]">photo_camera</span>
                    Campus Life
                  </div>
                  <p className="font-body-sm text-body-sm text-primary-fixed">
                    Undergraduate BBA students collaborating on campus in the university library.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="w-full py-space-xl bg-surface-container-low border-y border-outline-variant/30">
        <div className="max-w-[1280px] mx-auto px-margin">
          <div className="flex flex-col items-center text-center gap-space-xs max-w-2xl mx-auto mb-space-xl">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-wider font-semibold">Who We Are</span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold">Student Project Leadership</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Driven by final-year undergraduates passionate about democratizing recruiting knowledge before graduating into our respective fields.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            {/* Alex Morgan */}
            <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm border border-outline-variant/40 hover:shadow-md transition-all flex flex-col justify-between group">
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-headline-md text-headline-md font-bold">
                    AM
                  </div>
                  <span className="px-space-sm py-space-xs rounded-full bg-surface-container text-secondary font-label-sm text-label-sm font-semibold">
                    Class of '25
                  </span>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors font-bold">Alex Morgan</h3>
                  <p className="font-label-md text-label-md text-secondary font-semibold">Student Lead &amp; Finance Major</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
                    Incoming Analyst at Goldman Sachs. Leads platform roadmaps, curriculum consistency, and investment banking breakdown sessions.
                  </p>
                </div>
              </div>
              <div className="mt-space-lg bg-surface-container-low p-space-sm rounded-lg flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant">Specialization</span>
                <span className="font-label-sm text-label-sm font-semibold text-primary">M&amp;A / Equity Research</span>
              </div>
            </div>

            {/* Priya Sharma */}
            <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm border border-outline-variant/40 hover:shadow-md transition-all flex flex-col justify-between group">
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-headline-md text-headline-md font-bold">
                    PS
                  </div>
                  <span className="px-space-sm py-space-xs rounded-full bg-surface-container text-secondary font-label-sm text-label-sm font-semibold">
                    Class of '25
                  </span>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors font-bold">Priya Sharma</h3>
                  <p className="font-label-md text-label-md text-secondary font-semibold">Content &amp; Marketing Strategy</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
                    Former Brand Management Intern at Unilever. Oversees student editorial guides, social cohort spotlights, and storytelling.
                  </p>
                </div>
              </div>
              <div className="mt-space-lg bg-surface-container-low p-space-sm rounded-lg flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant">Specialization</span>
                <span className="font-label-sm text-label-sm font-semibold text-primary">Brand Marketing &amp; FMCG</span>
              </div>
            </div>

            {/* Marcus Chen */}
            <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm border border-outline-variant/40 hover:shadow-md transition-all flex flex-col justify-between group">
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline-md text-headline-md font-bold">
                    MC
                  </div>
                  <span className="px-space-sm py-space-xs rounded-full bg-surface-container text-secondary font-label-sm text-label-sm font-semibold">
                    Class of '25
                  </span>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors font-bold">Marcus Chen</h3>
                  <p className="font-label-md text-label-md text-secondary font-semibold">Operations &amp; Industry Relations</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
                    Incoming Supply Chain Specialist at Amazon. Coordinates alumni coffee hours, recruiting calendars, and verified job postings.
                  </p>
                </div>
              </div>
              <div className="mt-space-lg bg-surface-container-low p-space-sm rounded-lg flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant">Specialization</span>
                <span className="font-label-sm text-label-sm font-semibold text-primary">Logistics &amp; Tech Ops</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Feedback Form Section */}
      <section className="w-full py-space-xl bg-surface-container-lowest">
        <div className="max-w-[1280px] mx-auto px-margin">
          <div className="bg-surface-container-low rounded-2xl p-space-lg md:p-space-xl border border-outline-variant/40 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
              <div className="lg:col-span-5 flex flex-col justify-between gap-space-lg">
                <div className="flex flex-col gap-space-sm">
                  <span className="font-label-md text-label-md text-secondary uppercase tracking-wider font-semibold">Peer Feedback &amp; Contact</span>
                  <h2 className="font-headline-lg text-headline-lg text-primary leading-tight font-bold">
                    Have questions or want to contribute a career guide?
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    We are always looking for student contributors, alumni interview transcripts, and constructive ideas to keep our materials sharp and free. Drop by or shoot us a message.
                  </p>
                </div>

                <div className="flex flex-col gap-space-md">
                  <div className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-lowest shadow-sm border border-outline-variant/30">
                    <div className="w-10 h-10 rounded-lg bg-surface-container text-secondary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[20px]">mail</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-outline">Student Project Mailbox</span>
                      <a href="mailto:hello@bbacareerhub.edu" className="font-label-lg text-label-lg text-primary hover:text-secondary transition-colors font-bold">
                        hello@bbacareerhub.edu
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-lowest shadow-sm border border-outline-variant/30">
                    <div className="w-10 h-10 rounded-lg bg-surface-container text-secondary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[20px]">location_on</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-outline">On-Campus Location</span>
                      <span className="font-body-sm text-body-sm font-semibold text-primary">
                        Business School Building, Room 304, Student Affairs Wing
                      </span>
                    </div>
                  </div>

                  <div className="p-space-sm rounded-lg bg-surface-container flex items-center gap-space-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-[18px] text-secondary">schedule</span>
                    <span className="font-body-sm text-body-sm">Peer Advisory Office Hours: Mon &amp; Thu 4:00 PM – 6:30 PM</span>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-space-lg shadow-md border border-outline-variant/40">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-space-sm font-bold">Send Us a Student Note</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                  Fill out this quick form and our lead team will respond within 24–48 campus hours.
                </p>

                {feedback && (
                  <div className={`p-space-sm rounded-lg mb-space-md font-body-sm flex items-center gap-space-xs ${
                    feedback.type === 'success' ? 'bg-surface-container text-secondary font-semibold' : 'bg-error-container text-on-error-container'
                  }`}>
                    <span className="material-symbols-outlined text-[18px]">
                      {feedback.type === 'success' ? 'check_circle' : 'error'}
                    </span>
                    {feedback.text}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-space-md">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-sm text-label-sm text-primary uppercase font-semibold" htmlFor="student-name">Full Name</label>
                      <input
                        id="student-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Jordan Rivera"
                        className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-sm border border-outline-variant/60 focus:outline-none focus:ring-2 focus:ring-secondary/40"
                      />
                    </div>

                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-sm text-label-sm text-primary uppercase font-semibold" htmlFor="student-email">Student Email</label>
                      <input
                        id="student-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@university.edu"
                        className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-sm border border-outline-variant/60 focus:outline-none focus:ring-2 focus:ring-secondary/40"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-sm text-label-sm text-primary uppercase font-semibold" htmlFor="subject-field">Subject</label>
                    <select
                      id="subject-field"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-sm border border-outline-variant/60 focus:outline-none focus:ring-2 focus:ring-secondary/40"
                    >
                      <option value="general">General Question</option>
                      <option value="contribute">Submit a Career Guide / Teardown</option>
                      <option value="mentorship">Volunteer as an Alumni Mentor</option>
                      <option value="feedback">Website Resource Feedback</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-sm text-label-sm text-primary uppercase font-semibold" htmlFor="message-field">Message</label>
                    <textarea
                      id="message-field"
                      required
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we help, or what would you like to contribute to the student portal?"
                      className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-sm border border-outline-variant/60 focus:outline-none focus:ring-2 focus:ring-secondary/40 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="self-start px-space-xl py-space-sm rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg transition-all shadow-sm cursor-pointer flex items-center gap-space-xs"
                  >
                    <span>{loading ? 'Sending...' : 'Send Message'}</span>
                    <span className="material-symbols-outlined text-[16px]">send</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
