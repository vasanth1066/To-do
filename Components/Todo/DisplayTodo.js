import React from "react";
import classes from "./DisplayTodo.module.css";
import { Toaster, toast } from "alert";

const DisplayTodo = (props) => {
  const completeHander = async (name, id) => {
    let tododata = {
      name: name,
      isCompleted: true,
      status: "tododone",
      id: id,
    };
    toast.success("Todo-Completed  !!!");

    const response = await fetch("/api/puttododata", {
      method: "PUT",
      body: JSON.stringify(tododata),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    toast.success("To Check Completed Todo Click Completed Todo ");
  };

  const deleteteHander = async (id) => {
    const response = await fetch("/api/deletetododata", {
      method: "DELETE",
      body: JSON.stringify(id),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    toast.error("Todo Deleted");
  };
  return (
    <div className={classes.DisplayTodolist}>
      {props.tododata &&
        props.tododata.map((val, index) => (
          <ul key={index} className={classes.todoList}>
            <li className={classes.todoItem}>
              {val.name}
              {!val.isCompleted && (
                <div>
                  <button
                    className={classes.completeButton}
                    onClick={() => completeHander(val.name, val._id)}
                  >
                    <span>&#10003;</span>
                  </button>
                </div>
              )}
              <div>
                <button
                  className={classes.deletebutton}
                  onClick={() => deleteteHander(val._id)}
                >
                  <span>&#10005;</span>
                </button>
              </div>
            </li>
          </ul>
        ))}
      <Toaster position="bottom-right" />
    </div>
  );
};

export default DisplayTodo;
