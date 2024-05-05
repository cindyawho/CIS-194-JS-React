import React, { useState } from 'react';
import { TodoList } from './TodoList';

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
  {/* The next thing we want to do is actually be able to toggle the todo items. using useState */}
  const [todos, setTodos] = useState(initialTodos);

  {/* We’ll want to be able to toggle todos. We can do this by creating a toggleTodo function in 
  our App.tsx file. The toggleTodo function will take a selected todo and toggle the complete prop 
  for that todo.
   */}
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
    </>
  );
}

export default App;
