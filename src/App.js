import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "react를 배워봅시다.",
    },
  ]);

  const [title, setTitle] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const clickAddButtonHandler = () => {
    const newTodo = {
      id: todo.length + 1,
      title,
    };

    setTodo([...todo, newTodo]);

    setTitle("");
  };

  return (
    <div className="App">
      <div>
        <div className="input-space">
          <input value={title} onChange={titleChangeHandler}></input>
          <button onClick={clickAddButtonHandler}>추가하기</button>
        </div>
        <h2>Todo List</h2>

        <div className="component-space">
          {todo.map((item) => {
            return (
              <div className="component-style" key={item.id}>
                {item.title}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
