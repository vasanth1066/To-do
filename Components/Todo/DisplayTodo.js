import React from "react";
import classes from "./DisplayTodo.module.css";

const dummytodo = [
  { name: "Assignment" },
  { name: "Learn js" },
  { name: "Revise Concepts" },
];

const DisplayTodo = () => {
  const completeHander = () => {
    console.log("clicked");
  };
  const editHander = () => {};
  const deleteteHander = () => {
    console.log("clicked dddd");
  };
  return (
    <div className={classes.DisplayTodolist}>
      {dummytodo.map((val, index) => (
        <ul key={index} className={classes.todoList}>
          <li className={classes.todoItem}>
            {val.name}

            <div>
              <div>
                <button
                  className={classes.completeButton}
                  onClick={completeHander}
                >
                  <span>&#10003;</span>
                </button>
              </div>
              <button className={classes.editbutton} onClick={editHander}>
                <span>&#9998;</span>
              </button>
              <button className={classes.deletebutton} onClick={deleteteHander}>
                <span>&#10005;</span>
              </button>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default DisplayTodo;
