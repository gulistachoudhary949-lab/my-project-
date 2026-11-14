import mongoose from 'mongoose';

const internshipSchema = new mongoose.Schema({
  company: { type: String, required: true },
  initial: { type: String, required: true },
  roleTitle: { type: String, required: true },
  track: { type: String, required: true }, // e.g. Marketing, Finance, HR, Data Analytics
  location: { type: String, required: true },
  stipend: { type: String, required: true },
  duration: { type: String, required: true },
  deadlineStatus: { type: String, required: true }, // e.g. 'Rolling Intake', 'Closes Apr 30', 'Priority Deadline'
  type: { type: String, required: true }, // 'Summer Internship', 'Part-Time Trainee', 'Co-op'
  description: { type: String, required: true },
  requirements: [{ type: String }],
  postedDate: { type: Date, default: Date.now }
});

export default mongoose.models.Internship || mongoose.model('Internship', internshipSchema);
