import mongoose from 'mongoose';

const { Schema } = mongoose;

const eventSchema = new Schema(
  {
    end: { type: Date, required: true },
    start: { type: Date, required: true },
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    isVirtual: { type: Boolean, default: false },
    category: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default eventSchema;
