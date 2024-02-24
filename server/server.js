import express from "express";
import connectToDB from "./config/db.js";
import cors from "cors";
import routes from "./routes/TodoRoute.js";
import path from "path";

const app = express();
app.use(express.json());
app.use(cors());

connectToDB();

const __dirname = path.resolve();

const PORT = 8000;

//routes
app.use("/api", routes);
app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});
app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
