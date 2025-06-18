import postHandler from "../handlers/postHandler.js";
const homePage = async (req, res) => {
  const posts = await postHandler.getAllPosts();
  res.render("home", {
    title: "Note Classifier",
    classification: "Technical Notes",
    inputText: "When an API returns a 404, it's likely due to...",
  });
};
export default {
  homePage,
};
