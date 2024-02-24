import todoModel from "../models/todo.js";

//save
export const addTodo = async (req, res) => {
  try {
    const { text } = req.body;
    const data = await todoModel.create({ text });
    console.log("Added Successfully");
    res.send(data);
  } catch (err) {
    console.log("Error");
    res.status(500).send("Internal server error: " + err.message);
  }
};

//get
export const getTodo = async (req, res) => {
  try {
    const todo = await todoModel.find();
    res.send(todo);
  } catch (err) {
    console.log(err);
    res.status(500).send("internal server error");
  }
};

//delete
export const deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    // console.log(id);
    const data = await todoModel.findByIdAndDelete(id);
    res.status(201).send({
      data,
      message: "TODO deleted",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(" internal error");
  }
};

//update
export const updateToDo = async (req, res) => {
  try {
    const { _id, text } = req.body;

    await todoModel.findByIdAndUpdate(_id, { text });
    res.status(201).send("Updated Successfully.");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

//Done todo
export const doneTodo = async (req, res) => {
  try {
    const { id } = req.params;

    await todoModel.findByIdAndUpdate({ _id: id }, { done: true });
    res.status(201).send("completed Todo.");
  } catch (error) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};
