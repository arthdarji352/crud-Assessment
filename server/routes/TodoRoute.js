import express from "express";
import {
  deleteTodo,
  getTodo,
  addTodo,
  updateToDo,
} from "../controllers/todo.js";

const router = express.Router();

//POST || ADD TODO
router.post("/add", addTodo);

//GET || get all todos
router.get("/", getTodo);

//UPDATE TODO
router.put("/update", updateToDo);

//Delete TODO
router.delete("/delete", deleteTodo);

export default router;
