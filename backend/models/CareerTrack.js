import mongoose from 'mongoose';

const careerTrackSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  trackNumber: { type: String, required: true },
  title: { type: String, required: true },
  category: { type: String, required: true }, // e.g. 'Analytical & Quant', 'Client & Growth', 'People & Culture', 'Venture & Innovation'
  icon: { type: String, required: true },
  description: { type: String, required: true },
  entryRoles: [{ type: String }],
  competencies: [{ type: String }],
  image: { type: String, required: true },
  imageAlt: { type: String }
});

export default mongoose.models.CareerTrack || mongoose.model('CareerTrack', careerTrackSchema);
