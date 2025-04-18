import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    specialty: { type: String, required: true },
    experience: { type: Number, required: true },
    location: { type: String, required: true },
    availability: [
      {
        day: { type: String, required: true },
        slots: [{ type: String, required: true }], // Example: ['10:00 AM', '11:00 AM']
      }
    ],
    consultationFee: { type: Number, required: true },
  },
  { timestamps: true }
);

const Doctor = mongoose.model('Doctor', doctorSchema);
export default Doctor;
