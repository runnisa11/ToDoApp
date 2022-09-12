import { Schema, model } from 'mongoose';

const todoSchema = new Schema(
  {
    Title: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    Status: {
      type :String,
      required :true,
    }
  },
  {
    timestamps: true
  }
);

export default model('todo', todoSchema);
