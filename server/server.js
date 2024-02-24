import express from "express";
import connectToDB from "./config/db.js";
import cors from "cors";
import routes from "./routes/TodoRoute.js";

const app = express();
app.use(express.json());
app.use(cors());

connectToDB();

const PORT = 8000;

//routes
app.use(routes);

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
