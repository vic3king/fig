import mongoose from 'mongoose';

const { Schema } = mongoose;

const eventSchema = new Schema(
  {
    end: { type: Date, required: true },
    start: { type: Date, required: true },
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    type: {
      type: String,
      enum: ['remote', 'on-site'],
      default: 'remote',
    },
    tags: { type: Array, default: [] },
  },
  {
    timestamps: true,
  }
);

export default eventSchema;
