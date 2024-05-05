import React from 'react';

// // Our TodoListItem component will at least take a todo item as a prop. 
// //  That todo item will have text property, which will be a string, and a complete property, which will be a boolean.
// see types.d.ts file
// interface Todo{
//     text: string;
//     complete: boolean;
// }

interface Props {
    todo: Todo;
    toggleTodo : ToggleTodo;
}

// Once we’ve defined our props, we can declare our TodoListItem as a functional component (React.FC) and then pass our Props as a generic.
export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
    return (
      <li>
        <label
          style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
        >
          <input
            type="checkbox"
            checked={todo.complete}
            onClick={() => {
              toggleTodo(todo);
            }}
          />{' '}
          {todo.text}
        </label>
      </li>
    );
  };