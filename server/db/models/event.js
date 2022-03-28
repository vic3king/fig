import mongoose from 'mongoose';
import eventSchema from '../schemas/eventSchema';
// Event MODEL
const Event = mongoose.model('Event', eventSchema);

export default Event;
