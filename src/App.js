import React, { useState } from "react";
import "./App.css";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      className="todo"
    >
      {todo.text}
      <div>
        <button className="complete" onClick={() => completeTodo(index)}>
          Complete
        </button>
        <button className="remove" onClick={() => removeTodo(index)}>
          x
        </button>
      </div>
    </div>
  );
}

function TodoForm({ addToDo }) {
  const [value, setValue] = useState(""); // emply be default

  const handelSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addToDo(value);
    setValue("");
  };

  return (
    <form onSubmit={handelSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add todo"
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about Hooks",
      isCompleted: false
    },
    {
      text: "Rev Js classes",
      isCompleted: false
    },
    {
      text: "Go to a meetup",
      isCompleted: false
    }
  ]);

  const addToDo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addToDo={addToDo} />
      </div>
    </div>
  );
}

export default App;
