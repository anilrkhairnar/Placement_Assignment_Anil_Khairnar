import React, { useReducer, useState } from "react";

// import reducer
import { reducer, initialState } from "./reducer/reducer";

const TodoApp = () => {
  const [inputText, setInputText] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const inputChange = (e) => {
    setInputText(e.target.value);
  };

  const addTodo = () => {
    if (inputText.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputText,
        completed: false,
      };
      dispatch({ type: "ADD_TODO", payload: newTodo });
      setInputText("");
    }
  };

  const toggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  return (
    <div className="container">
      <h1 className="todo-header">Todo App</h1>
      <div className="row">
        <input
          type="text"
          className="todo-input"
          value={inputText}
          onChange={inputChange}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
        />
        <button className="todo-button" onClick={addTodo}>
          Add Todo
        </button>
      </div>
      <ul className="todo-list">
        {state.todos.map((todo) => (
          <li
            className="todo-item"
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
