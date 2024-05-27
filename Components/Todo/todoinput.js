import { useRef } from "react";

import classes from "./todoinput.module.css";

function TodoList() {
  const todoinputref = useRef("");

  function AddtodoHandler(event) {
    event.preventDefault();
    const todoname = todoinputref.current.value;
    console.log(todoname);

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
