import React, {useEffect} from "react";
import "./TodoList.css"

const TodoItem = ({ items, item, setItems }) => {

  useEffect(()=>{
    console.log ("########item", item)
  },[])

  const toggleDone = (event) => {
    console.log("#######items", );
    setItems(
      items.map((i, index) => {
        console.log("#######index", items[index]);
        console.log("#######item", item);
        if (items[index] === item) {
          return { ...item, done: !item.done };
        }
        return i;
      })
    );
  };

  return (
    <div className="app">
      <div className="todoList">
        <input
          type="checkbox"
          checked={item.done}
          onClick={toggleDone}
          onChange={toggleDone}
        />
        {item.text}
      </div>
    </div>
  );
};

export default TodoItem;