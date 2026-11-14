import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  subject: { type: String, required: true, default: 'general' },
  message: { type: String, required: true },
  status: { type: String, enum: ['new', 'in_progress', 'resolved'], default: 'new' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Contact || mongoose.model('Contact', contactSchema);
