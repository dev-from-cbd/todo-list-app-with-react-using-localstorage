import React from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Lists from "./components/Lists";

const App = () => {
  const [state, setstate] = useState(initialState);

  const delHandler = () => {
    console.log("done");
  };

  const doneHandler = () => {
    console.log("delete");
  };

  return (
    <Layout>
      <Header />
      <Form todo={todo} />
      <Lists done={doneHandler} del={delHandler} change={(e) => setTodo(e.target)} />
    </Layout>
  );
};

export default App;
