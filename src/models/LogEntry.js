import mongoose from "mongoose";
const { Schema } = mongoose;

const logEntryScheme = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: string,
    comments: string,
    image: string,

    rating: {
      type: Number,
      min: 0,
      max: 10,
      default: 0,
    },
    latitute: {
      type: Number,
      required: true,
      min: -90,
      max: 90,
    },
    longitute: {
      type: Number,
      required: true,
      min: -180,
      max: 180,
    },

    visitDate: {
      required: true,
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);
const LogEntry = mongoose.model("LogEntry", logEntryScheme);

module.exports = LogEntry;
