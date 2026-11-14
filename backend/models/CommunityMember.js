import mongoose from 'mongoose';

const communityMemberSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  major: { type: String, required: true },
  graduationYear: { type: String, required: true },
  interest: { type: String, default: 'Career Guidance' },
  joinedAt: { type: Date, default: Date.now }
});

export default mongoose.models.CommunityMember || mongoose.model('CommunityMember', communityMemberSchema);
