import React from "react";
import { BsCircleFill, BsFillCheckCircleFill } from "react-icons/bs";
import { FaEdit, FaTrash } from "react-icons/fa";

const ToDo = ({ item, updateMode, deleteToDo, handleEdit, setToDo }) => {
  return (
    <div className="todo">
      <div
        className="d-flex align-items-center gap-3"
        onClick={() => handleEdit(item._id, setToDo)}
      >
        {item.done ? (
          <>
            <BsFillCheckCircleFill className="icon" />

            <div className="text">
              <del>{item.text} </del>
            </div>
          </>
        ) : (
          <>
            <BsCircleFill className="icon" />
            <div className="text">{item.text} </div>
          </>
        )}
      </div>
      <div className="icons">
        <span className="" onClick={() => updateMode(item._id, item.text)}>
          <FaEdit />
        </span>
        <span onClick={() => deleteToDo(item._id, setToDo)}>
          <FaTrash />
        </span>
      </div>
    </div>
  );
};

export default ToDo;
