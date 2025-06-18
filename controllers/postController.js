import postHandler from "../handlers/postHandler";

const createPost = async (req, res) => {
  const postData = req.body;
  const newPost = await postHandler.createPost(postData);
  res.status(201).json(newPost);
};

const getAllPosts = async (req, res) => {
  const posts = await postHandler.getAllPosts();
  res.status(200).json(posts);
};

export default {
  createPost,
  getAllPosts,
};
