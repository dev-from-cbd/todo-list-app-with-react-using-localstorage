import React from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Layout from "./components/Lists";

const App = () => {
  const delHandler = () => {
    console.log("done");
  };

  const doneHandler = () => {
    console.log("delete");
  };

  return (
    <Layout>
      <Header />
      <Lists />
    </Layout>
  );
};

export default App;
