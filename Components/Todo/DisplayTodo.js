import React from "react";
import classes from "./DisplayTodo.module.css";

const dummytodo = [
  { name: "Assignment" },
  { name: "Learn js" },
  { name: "Revise Concepts" },
];

const DisplayTodo = (props) => {
  const completeHander = async (name, id) => {
    console.log("clicked");
    let tododata = {
      name: name,
      isCompleted: true,
      status: "tododone",
      id: id,
    };
    console.log(tododata, id);

    const response = await fetch("/api/puttododata", {
      method: "PUT",
      body: JSON.stringify(tododata),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };
  const editHander = () => {};
  const deleteteHander = () => {
    console.log("clicked dddd");
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
                <button className={classes.editbutton} onClick={editHander}>
                  <span>&#9998;</span>
                </button>
                <button
                  className={classes.deletebutton}
                  onClick={deleteteHander}
                >
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
