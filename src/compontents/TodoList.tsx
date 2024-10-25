import "./todoList.css";

interface TodoListProps {
  todos: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

export function TodoList({ todos, onDeleteTodo }: TodoListProps) {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
