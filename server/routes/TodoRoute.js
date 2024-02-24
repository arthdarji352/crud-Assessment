import express from "express";
import {
  deleteTodo,
  getTodo,
  addTodo,
  updateToDo,
  doneTodo,
} from "../controllers/todo.js";

const router = express.Router();

//POST || ADD TODO
router.post("/add", addTodo);

//GET || get all todos
router.get("/", getTodo);

//UPDATE TODO
router.put("/update", updateToDo);

//Delete TODO
router.delete("/delete/:id", deleteTodo);

//done todo
router.put("/done/:id", doneTodo);

export default router;
