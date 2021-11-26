import React, { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Lists from "./components/Lists";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    setTodos([{ id: Date.now(), title: todo, done: false }, ...todos]);
  };

  const delHandler = (todoId) => {
    if (window.confirm("Are you sure?")) {
      const updatedTodos = todos.filter((item) => item.id !== todoId);

      setTodos(updatedTodos);
    }
  };

  const doneHandler = (todoId) => {
    const index = todos.findIndex((item) => item.id === todoId);
    const duplicateTodos = [...todos];

    duplicateTodos[index] = {
      id: 
    };
  };

  return (
    <Layout>
      <Header />
      <Form
        todo={todo}
        change={(e) => setTodo(e.target.value)}
        submit={submitHandler}
      />
      <Lists done={doneHandler} del={delHandler} todos={todos} />
    </Layout>
  );
};

export default App;
