import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  titleCl: { type: Number, default: 5 },
  contentCl: { type: Number, default: 5 },
  author: { type: String, required: [true, "Author is required"] },
});

export default mongoose.model("Post", postSchema);
