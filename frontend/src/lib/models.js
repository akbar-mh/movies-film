

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  plot: {
    type: String,
    required: true,
  },
  genres: {
    type: [String], // Assuming genres is an array of strings
    required: true,
  },
  runtime: {
    type: Number,
    required: true,
  },
  cast: {
    type: [String], // Assuming cast is an array of strings
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  fullplot: {
    type: String,
    required: true,
  },
  languages: {
    type: [String], // Assuming languages is an array of strings
    required: true,
  },
  released: {
    type: Date,
    required: true,
  },
  directors: {
    type: [String], // Assuming directors is an array of strings
    required: true,
  },
  rated: {
    type: String,
    required: true,
  },
  awards: {
    lastupdated: {
      type: Date,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
  },
  imdb: {
    // Define the structure based on the IMDb object
    // Example: You might have fields like rating, votes, etc.
  },
  countries: {
    type: [String], // Assuming countries is an array of strings
    required: true,
  },
  tomatoes: {
    num_mflix_comments: {
      type: Number,
      required: true,
    },
    // You can add more fields based on the tomatoes object
  },
}, {
  timestamps: true
});

export const movies = mongoose.model("movies", userSchema);

