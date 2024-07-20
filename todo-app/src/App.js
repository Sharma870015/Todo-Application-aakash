import React, { useState } from "react";
import "./App.css";
import TodoInp from "./components/TodoInp";
import TodoList from "./components/TodoList";


function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inpuText) => {
    if (inpuText !== "") setListTodo([...listTodo, inpuText]);
  };

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInp title="My todo" description="My todo list" addList={addList} />

        

        {listTodo.map((listItem, i) => {
          return (
            <TodoList
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteListItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
