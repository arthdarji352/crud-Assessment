import axios from "axios";

const baseUrl = "https://crud-assessment.onrender.com/api";

const getAllToDo = (setToDo) => {
  axios.get(baseUrl).then(({ data }) => {
    // console.log("data", data);
    setToDo(data);
  });
};

const addToDo = (text, setText, setToDo) => {
  axios
    .post(`${baseUrl}/add`, { text })
    .then((data) => {
      //   console.log(data);
      setText("");
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
  axios
    .put(`${baseUrl}/update`, { _id: toDoId, text })
    .then((data) => {
      setText("");
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const deleteToDo = async (_id, setToDo) => {
  try {
    await axios.delete(`${baseUrl}/delete/${_id}`);
    // console.log(data, _id);
    getAllToDo(setToDo);
  } catch (error) {
    console.log(error, "delete");
  }
};

const handleEdit = async (id, setToDo) => {
  try {
    const data = await axios.put(`${baseUrl}/done/${id}`);
    console.log(data);
    getAllToDo(setToDo);
  } catch (error) {
    console.log(error);
  }
};
export { getAllToDo, addToDo, updateToDo, deleteToDo, handleEdit };
