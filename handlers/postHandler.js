import Post from "../models/postModel.js";

const createPost = async (postData) => {
  return await Post.create(postData);
};
const getAllPosts = async () => {
  return await Post.find();
};
export default {
  createPost,
  getAllPosts,
};
