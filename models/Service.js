import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  features: {
    type: [String],
    default: []
  }
}, { timestamps: true });

export default mongoose.model("Service", serviceSchema);
