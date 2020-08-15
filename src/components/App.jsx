import React from "react";
import Button from "./Button";
import Input from "./Input";
import Heading from "./Heading";
import List from "./List";

function App() {
  return (
    <div className="container">
      <Heading />
      <div className="form">
        <Input />
        <Button />
      </div>
      <List />
    </div>
  );
}

export default App;
