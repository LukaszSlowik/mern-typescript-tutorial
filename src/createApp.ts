import express from "express";
import path from "path";
import rootRouter from "./routes/root";
export function createApp() {
  const app = express();
  app.use(express.json());

  app.use("/", express.static(path.join(__dirname, "public"))); //then no slash means public/
  app.use("/", rootRouter);
  app.all("*", (req, res) => {
    res.status(404);
    if (req.accepts("html")) {
      res.sendFile(path.join(__dirname, "views", "404.html"));
    } else if (req.accepts("json")) {
      res.json({ message: "404 Not found" });
    } else {
      res.type("txt").send("Not found");
    }
  });

  app.use("/api/users", (req, res) => {
    res.json({ name: "John Doe" });
  });
  return app;
}
