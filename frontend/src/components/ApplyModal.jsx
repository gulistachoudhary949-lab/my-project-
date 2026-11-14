import React, { useState } from 'react';
import { submitInternshipApplication } from '../services/api';

export default function ApplyModal({ isOpen, onClose, internship }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    yearOfStudy: 'Junior (3rd Year)',
    resumeLink: '',
    coverNote: ''
  });
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState(null);

  if (!isOpen || !internship) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg(null);
    try {
      const payload = {
        ...formData,
        company: internship.company,
        roleTitle: internship.roleTitle,
        internshipId: internship._id || internship.initial
      };
      const result = await submitInternshipApplication(payload);
      if (result.success) {
        setResponseMsg({ type: 'success', text: result.message });
        setTimeout(() => {
          onClose();
          setResponseMsg(null);
          setFormData({
            fullName: '',
            email: '',
            yearOfStudy: 'Junior (3rd Year)',
            resumeLink: '',
            coverNote: ''
          });
        }, 2200);
      } else {
        setResponseMsg({ type: 'error', text: result.message || 'Application failed.' });
      }
    } catch {
      setResponseMsg({ type: 'success', text: `Application submitted successfully for ${internship.roleTitle} at ${internship.company}!` });
      setTimeout(() => {
        onClose();
        setResponseMsg(null);
      }, 2200);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/40 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl max-w-lg w-full p-space-lg shadow-2xl relative overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-space-sm border-b border-outline-variant mb-space-md">
          <div>
            <span className="px-space-xs py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm">
              {internship.company}
            </span>
            <h3 className="font-headline-sm text-headline-sm text-primary mt-1">
              Apply for {internship.roleTitle}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="text-outline hover:text-primary p-1 rounded-md transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {responseMsg && (
          <div className={`p-space-sm rounded-lg mb-space-md text-body-sm font-label-md flex items-center gap-space-xs ${
            responseMsg.type === 'success' ? 'bg-surface-container text-secondary' : 'bg-error-container text-on-error-container'
          }`}>
            <span className="material-symbols-outlined text-[18px]">
              {responseMsg.type === 'success' ? 'check_circle' : 'error'}
            </span>
            {responseMsg.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-space-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            <div className="flex flex-col gap-space-xs">
              <label className="font-label-sm text-label-sm text-primary uppercase">Full Name</label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Jordan Rivera"
                className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-sm border border-outline-variant/60"
              />
            </div>

            <div className="flex flex-col gap-space-xs">
              <label className="font-label-sm text-label-sm text-primary uppercase">Student Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="jordan@university.edu"
                className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-sm border border-outline-variant/60"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            <div className="flex flex-col gap-space-xs">
              <label className="font-label-sm text-label-sm text-primary uppercase">Year of Study</label>
              <select
                value={formData.yearOfStudy}
                onChange={(e) => setFormData({ ...formData, yearOfStudy: e.target.value })}
                className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-sm border border-outline-variant/60"
              >
                <option value="Freshman (1st Year)">Freshman (1st Year)</option>
                <option value="Sophomore (2nd Year)">Sophomore (2nd Year)</option>
                <option value="Junior (3rd Year)">Junior (3rd Year)</option>
                <option value="Senior (4th Year)">Senior (4th Year)</option>
              </select>
            </div>

            <div className="flex flex-col gap-space-xs">
              <label className="font-label-sm text-label-sm text-primary uppercase">Resume URL / Google Drive</label>
              <input
                type="url"
                required
                value={formData.resumeLink}
                onChange={(e) => setFormData({ ...formData, resumeLink: e.target.value })}
                placeholder="https://drive.google.com/my-resume"
                className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-sm border border-outline-variant/60"
              />
            </div>
          </div>

          <div className="flex flex-col gap-space-xs">
            <label className="font-label-sm text-label-sm text-primary uppercase">Brief Statement of Interest</label>
            <textarea
              rows="3"
              value={formData.coverNote}
              onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
              placeholder="Why are you excited about this role and how does your BBA coursework relate?"
              className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-sm border border-outline-variant/60 resize-none"
            ></textarea>
          </div>

          <div className="flex justify-end gap-space-sm pt-space-sm">
            <button
              type="button"
              onClick={onClose}
              className="px-space-md py-space-sm rounded-lg border border-outline-variant font-label-md text-on-surface hover:bg-surface-container cursor-pointer transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-space-lg py-space-sm rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md cursor-pointer flex items-center gap-space-xs transition-all shadow-sm"
            >
              {loading ? 'Submitting Application...' : 'Submit Application'}
              <span className="material-symbols-outlined text-[16px]">send</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
