import fs from "fs";
import * as datefns from "date-fns"; // library that displays dates nicely

// handy to console log in browser when debuggin
const dump = (obj) => JSON.stringify(obj, null, 2);

// insert svg icons
const icon = (iconName) => fs.readFileSync(`./public/icons/${iconName}.svg`);
const siteName = "Post-Classifier";

const categories = [
  { title: "Journal", icon: "book-open", slug: "/jrnl" },
  { title: "Meeting Posts", icon: "post", slug: "/busnts" },
  { title: "Technical Posts", icon: "code", slug: "/tech" },
  { title: "Academic Posts", icon: "lightbulb", slug: "/school" },
  { title: "Tasks", icon: "check-square", slug: "/tasks" },
  { title: "Other", icon: "file-text", slug: "/other" },
];
export { dump, icon, siteName, datefns, categories };
