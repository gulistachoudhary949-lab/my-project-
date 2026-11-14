import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  yearOfStudy: { type: String, required: true },
  company: { type: String, required: true },
  roleTitle: { type: String, required: true },
  internshipId: { type: String },
  resumeLink: { type: String },
  coverNote: { type: String },
  appliedAt: { type: Date, default: Date.now }
});

export default mongoose.models.Application || mongoose.model('Application', applicationSchema);
