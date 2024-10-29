import React, { useState } from "react";

import Header from "./components/Header";
import ListToDo from "./components/ListToDo";
import Title from "./components/Title";
import Add from "./components/Add";

const App = () => {
  const [items, setItems] = useState([]);
  const [inputData, setInputData] = useState("");
  const [showIncomplete, setShowIncomplete] = useState(false);

  const handleChangeInput = (event) => {
    setInputData(event.target.value.trim());
  };

  const handleAddItem = () => {
    setItems((prev) => {
      if (inputData !== "")
        return [...prev, { label: inputData, status: false, id: Date.now() }];
      else return prev;
    });
    setInputData("");
  };

  const handleChangeStatus = (id) => {
    setItems((prev) => {
      return prev.map((item) => {
        if (item.id === id) return { ...item, status: !item.status };
        return item;
      });
    });
  };

  const handleRemoveItem = (id) => {
    setItems((prev) => {
      return prev.filter((item) => {
        return item.id !== id;
      });
    });
  };

  const handleShowIncomplete = () => {
    setShowIncomplete(!showIncomplete);
  };

  return (
    <div>
      <Header />
      <main>
        <Title />
        <div className="show">
          <ListToDo
            items={items}
            showIncomplete={showIncomplete}
            handleChangeStatus={handleChangeStatus}
            handleRemoveItem={handleRemoveItem}
          />
          <span className="incompleted">
            <p>Show incompleted tasks only</p>
            <input
              type="checkbox"
              id="incompleted-checkbox"
              onChange={handleShowIncomplete}
              checked={showIncomplete}
            />
          </span>
        </div>
        <Add
          handleChangeInput={handleChangeInput}
          inputData={inputData}
          handleAddItem={handleAddItem}
        />
      </main>
    </div>
  );
};

export default App;
