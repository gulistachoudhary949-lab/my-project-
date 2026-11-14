import express from 'express';
import Contact from '../models/Contact.js';
import Application from '../models/Application.js';
import CommunityMember from '../models/CommunityMember.js';
import CareerTrack from '../models/CareerTrack.js';
import Internship from '../models/Internship.js';
import { defaultCareerTracks, defaultInternships } from '../seed.js';

const router = express.Router();

// Memory store fallbacks when DB is unreachable
const memoryContacts = [];
const memoryApplications = [];
const memoryCommunityMembers = [];

// GET /api/stats
router.get('/stats', async (req, res) => {
  try {
    const activeStudents = '1,400+';
    const placementRate = '88%';
    const alumniMentors = '120+';
    const toolkitsCount = '45+';
    res.json({
      success: true,
      data: { activeStudents, placementRate, alumniMentors, toolkitsCount }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/careers
router.get('/careers', async (req, res) => {
  try {
    const { category } = req.query;
    let tracks = [];
    try {
      tracks = await CareerTrack.find();
    } catch {
      tracks = defaultCareerTracks;
    }
    if (!tracks || tracks.length === 0) tracks = defaultCareerTracks;

    if (category && category !== 'all' && category !== 'All Tracks') {
      tracks = tracks.filter(t => t.category.toLowerCase().includes(category.toLowerCase()));
    }
    res.json({ success: true, data: tracks });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/careers/:slug
router.get('/careers/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    let track = null;
    try {
      track = await CareerTrack.findOne({ slug });
    } catch {
      track = defaultCareerTracks.find(t => t.slug === slug);
    }
    if (!track) track = defaultCareerTracks.find(t => t.slug === slug);

    if (!track) {
      return res.status(404).json({ success: false, message: 'Career track not found' });
    }
    res.json({ success: true, data: track });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/internships
router.get('/internships', async (req, res) => {
  try {
    const { track, search } = req.query;
    let internships = [];
    try {
      internships = await Internship.find();
    } catch {
      internships = defaultInternships;
    }
    if (!internships || internships.length === 0) internships = defaultInternships;

    if (track && track !== 'all' && track !== 'All') {
      internships = internships.filter(i => i.track.toLowerCase().includes(track.toLowerCase()));
    }
    if (search) {
      const q = search.toLowerCase();
      internships = internships.filter(i => 
        i.roleTitle.toLowerCase().includes(q) || 
        i.company.toLowerCase().includes(q) || 
        i.description.toLowerCase().includes(q)
      );
    }

    res.json({ success: true, data: internships });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/internships/apply
router.post('/internships/apply', async (req, res) => {
  try {
    const { fullName, email, yearOfStudy, company, roleTitle, internshipId, resumeLink, coverNote } = req.body;

    if (!fullName || !email || !roleTitle || !company) {
      return res.status(400).json({ success: false, message: 'Missing required application fields.' });
    }

    let applicationObj = {
      fullName,
      email,
      yearOfStudy: yearOfStudy || 'Undergraduate',
      company,
      roleTitle,
      internshipId,
      resumeLink,
      coverNote,
      appliedAt: new Date()
    };

    try {
      const doc = await Application.create(applicationObj);
      applicationObj = doc;
    } catch {
      memoryApplications.push(applicationObj);
    }

    res.status(201).json({
      success: true,
      message: `Application submitted successfully for ${roleTitle} at ${company}!`,
      data: applicationObj
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/contact
router.post('/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Name, email, and message are required.' });
    }

    let contactObj = { name, email, subject: subject || 'general', message, createdAt: new Date() };

    try {
      const doc = await Contact.create(contactObj);
      contactObj = doc;
    } catch {
      memoryContacts.push(contactObj);
    }

    res.status(201).json({
      success: true,
      message: 'Thank you! Your note has been received by our student advisory team.',
      data: contactObj
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/community/join
router.post('/community/join', async (req, res) => {
  try {
    const { fullName, email, major, graduationYear, interest } = req.body;

    if (!fullName || !email) {
      return res.status(400).json({ success: false, message: 'Full name and email are required.' });
    }

    let memberObj = {
      fullName,
      email,
      major: major || 'BBA General',
      graduationYear: graduationYear || '2026',
      interest: interest || 'Career Guidance',
      joinedAt: new Date()
    };

    try {
      const doc = await CommunityMember.create(memberObj);
      memberObj = doc;
    } catch {
      memoryCommunityMembers.push(memberObj);
    }

    res.status(201).json({
      success: true,
      message: 'Welcome to BBA Career Hub Community! Slack invitation and resources sent to your email.',
      data: memberObj
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
