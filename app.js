import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import methodOverride from "method-override"; // Importing missing module
import morgan from "morgan"; // Importing missing module
import flash from "connect-flash"; // Importing missing module
import { router } from "./routes/router.js";
import utils from "./utils/utils.js";
import session from "express-session";
// Assuming utils.js is a utility module
// Assuming notFound and flashValidationErrors are custom middleware

export const app = express();

app.set("view engine", "ejs");
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(morgan("dev"));
// app.use(flash());
// Bootstrap
app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootswatch/dist/vapor"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
);

// Custom middleware
app.use((req, res, next) => {
  res.locals.u = utils;
  // res.locals.currentPath = req.path; // current path
  // res.locals.user = req.user; // user object
  // res.locals.flashes = req.flash();
  next();
});

app.use("/", router);

// Error handling middleware should be defined last
// app.use(notFound);
// app.use(flashValidationErrors);
