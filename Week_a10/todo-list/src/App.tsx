import React, { useState } from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';

const initialTodos: Todo[] = [
  {
    text: 'Clean the bathroom',
    complete: false,
  },
  {
    text: 'CIS 194 Homework',
    complete: true,
  },
];


function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  return (
    <>
      Cindy's To Do List
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm />
    </>
  );
}

export default App;
