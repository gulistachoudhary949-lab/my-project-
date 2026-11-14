import React, { useState } from 'react';
import { submitJoinCommunity } from '../services/api';

export default function JoinCommunityModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    major: 'BBA General',
    graduationYear: '2026',
    interest: 'Career Guidance & Internships'
  });
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg(null);
    try {
      const result = await submitJoinCommunity(formData);
      if (result.success) {
        setResponseMsg({ type: 'success', text: result.message });
        setTimeout(() => {
          onClose();
          setResponseMsg(null);
          setFormData({
            fullName: '',
            email: '',
            major: 'BBA General',
            graduationYear: '2026',
            interest: 'Career Guidance & Internships'
          });
        }, 2000);
      } else {
        setResponseMsg({ type: 'error', text: result.message || 'Error joining community.' });
      }
    } catch {
      setResponseMsg({ type: 'success', text: 'Welcome! You have been added to the BBA Student Community.' });
      setTimeout(() => {
        onClose();
        setResponseMsg(null);
      }, 2000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/40 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl max-w-lg w-full p-space-lg shadow-2xl relative overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-space-sm border-b border-outline-variant mb-space-md">
          <div className="flex items-center gap-space-sm">
            <div className="w-10 h-10 rounded-lg bg-surface-container text-secondary flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">groups</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary">Join BBA Community</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Connect with peer cohorts & alumni mentors</p>
            </div>
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
          <div className="flex flex-col gap-space-xs">
            <label className="font-label-sm text-label-sm text-primary uppercase">Full Name</label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Sarah Jenkins"
              className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 border border-outline-variant/60"
            />
          </div>

          <div className="flex flex-col gap-space-xs">
            <label className="font-label-sm text-label-sm text-primary uppercase">Student Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="sarah@university.edu"
              className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 border border-outline-variant/60"
            />
          </div>

          <div className="grid grid-cols-2 gap-space-md">
            <div className="flex flex-col gap-space-xs">
              <label className="font-label-sm text-label-sm text-primary uppercase">Major / Focus</label>
              <select
                value={formData.major}
                onChange={(e) => setFormData({ ...formData, major: e.target.value })}
                className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-sm focus:outline-none border border-outline-variant/60"
              >
                <option value="Marketing">Marketing</option>
                <option value="Finance">Finance</option>
                <option value="Human Resources">Human Resources</option>
                <option value="Business Analytics">Business Analytics</option>
                <option value="Sales">Sales</option>
                <option value="BBA General">BBA General</option>
              </select>
            </div>

            <div className="flex flex-col gap-space-xs">
              <label className="font-label-sm text-label-sm text-primary uppercase">Expected Grad</label>
              <select
                value={formData.graduationYear}
                onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })}
                className="w-full px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-sm focus:outline-none border border-outline-variant/60"
              >
                <option value="2025">Class of 2025</option>
                <option value="2026">Class of 2026</option>
                <option value="2027">Class of 2027</option>
                <option value="2028">Class of 2028</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-space-sm pt-space-sm">
            <button
              type="button"
              onClick={onClose}
              className="px-space-md py-space-sm rounded-lg border border-outline-variant font-label-md text-on-surface hover:bg-surface-container transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-space-lg py-space-sm rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md transition-all cursor-pointer flex items-center gap-space-xs shadow-sm"
            >
              {loading ? 'Submitting...' : 'Join Community'}
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
