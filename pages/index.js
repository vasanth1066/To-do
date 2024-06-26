import Head from "next/head";
import Navbar from "../Components/Navbar/navabar";
import TodoList from "../Components/Todo/todoinput";
import DisplayTodo from "../Components/Todo/DisplayTodo";

import styles from "../styles/Home.module.css";
import { Fragment, useState, useEffect } from "react";

export default function Home(props) {
  const [todoData, setTodoData] = useState([]);
  // console.log(todoData);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/gettododata");
      const data = await response.json();
      setTodoData(data);
    };

    fetchData();
    const interval = setInterval(fetchData, 1000);

    return () => clearInterval(interval);
  }, []);
  const incompletedTodos = todoData.filter((todo) => !todo.isCompleted);
  return (
    <Fragment>
      <Navbar />
      <div className={styles.container}>
        <Head>
          <title>TODO</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to Todo List</h1>
        </main>
      </div>
      <TodoList />
      <DisplayTodo tododata={incompletedTodos} />
    </Fragment>
  );
}
