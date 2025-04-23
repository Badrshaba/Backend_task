import { Schema, model } from 'mongoose';

//============================== Create the Course schema ==============================//

const courseSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export default model('Course', courseSchema);
