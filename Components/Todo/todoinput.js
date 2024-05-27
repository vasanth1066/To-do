import { useRef } from "react";

import classes from "./todoinput.module.css";

function TodoList() {
  const todoinputref = useRef("");

  async function AddtodoHandler(event) {
    event.preventDefault();
    const todoname = todoinputref.current.value;

    let tododata = {
      name: todoname,
      isCompleted: false,
    };

    const response = await fetch("/api/hello", {
      method: "POST",
      body: JSON.stringify(tododata),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);

    todoinputref.current.value = "";
  }
  return (
    <div className={classes.todolist}>
      <form onSubmit={AddtodoHandler} className={classes.todolistform}>
        <label>Todo Name</label>
        <input type="text" ref={todoinputref}></input>
        <button>Add</button>
      </form>
    </div>
  );
}

export default TodoList;
