import React, { useState } from "react";
import TodoItem from "./TodoItems.js";
import "./TodoList.css"

const TodoList = () => {
  const [items, setItems] = useState([]);
  const incompleteCount = items.filter((item) => !item.done).length;

  const addItem = (text) => {
    setItems([...items, { text, done: false }]);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <div>
      <input className="addItem" type="text" placeholder="Add new item" onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.target.value.trim().length > 0 ? addItem(e.target.value) : "";
          e.target.value = "";
        }
      }} />
      <label> Incomplete Items: {incompleteCount} </label>
      </div>
      <div className="mainDiv">
        {items.map((item, index) => (
          <TodoItem key={index} items={items} item={item} setItems={setItems} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;

