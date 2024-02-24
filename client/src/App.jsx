import { useEffect, useState } from "react";
import {
  addToDo,
  deleteToDo,
  getAllToDo,
  handleEdit,
  updateToDo,
} from "./utils/HandleApi";
import ToDo from "./components/Todo";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <div className="App bg-black ">
      <div className="container m-auto p-5 mt-5 " style={{ height: "600px" }}>
        <h1 className="text-primary">TODO APP</h1>

        <div className="top mt-3 d-flex justify-content-center gap-1 ">
          <input
            type="text"
            placeholder="Add ToDos..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button
            type="button"
            className="btn btn-success px-4"
            onClick={
              isUpdating
                ? () =>
                    updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
                : () => addToDo(text, setText, setToDo)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </button>
        </div>

        <div className="list w-50 mx-auto">
          {!toDo.length && (
            <h1 className="mt-3 text-danger">Please Add atleast 1 TODO</h1>
          )}
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              item={item}
              deleteToDo={deleteToDo}
              updateMode={updateMode}
              handleEdit={handleEdit}
              setToDo={setToDo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
