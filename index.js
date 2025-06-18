import dotenv from "dotenv";
dotenv.config();
import init from "./init.js";

try {
  await init.mdb(process.env.MONGO_CONN);
  console.log("MongoDB connection initialized...");

  await init.hf(process.env.HF_CONN);
  console.log("Agent is running...");

  const { app } = await import("./app.js");
  console.log("App module loaded successfully...");
  app.listen(process.env.PORT, () => {
    console.log(
      `Server initialized successfully. Listening on port ${process.env.PORT}`
    );
  });
} catch (error) {
  console.error("Error initializing server:", error);
}
