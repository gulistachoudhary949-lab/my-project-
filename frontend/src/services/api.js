const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const fetchStats = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/stats`);
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.warn('API connection offline, using fallback stats', err);
    return {
      activeStudents: '1,400+',
      placementRate: '88%',
      alumniMentors: '120+',
      toolkitsCount: '45+'
    };
  }
};

export const fetchCareerTracks = async (category = 'all') => {
  try {
    const res = await fetch(`${API_BASE_URL}/careers?category=${encodeURIComponent(category)}`);
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.warn('API connection offline, returning local career tracks', err);
    return null;
  }
};

export const fetchCareerTrackBySlug = async (slug) => {
  try {
    const res = await fetch(`${API_BASE_URL}/careers/${slug}`);
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.warn('API connection offline', err);
    return null;
  }
};

export const fetchInternships = async (track = 'all', search = '') => {
  try {
    const res = await fetch(`${API_BASE_URL}/internships?track=${encodeURIComponent(track)}&search=${encodeURIComponent(search)}`);
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.warn('API offline', err);
    return null;
  }
};

export const submitContactForm = async (formData) => {
  const res = await fetch(`${API_BASE_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  return await res.json();
};

export const submitInternshipApplication = async (applicationData) => {
  const res = await fetch(`${API_BASE_URL}/internships/apply`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(applicationData)
  });
  return await res.json();
};

export const submitJoinCommunity = async (userData) => {
  const res = await fetch(`${API_BASE_URL}/community/join`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });
  return await res.json();
};
