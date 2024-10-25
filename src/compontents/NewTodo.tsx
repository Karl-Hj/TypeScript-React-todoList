import { useRef } from "react";
import "./newTodo.css";
type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

export function NewTodo({ onAddTodo }: NewTodoProps) {
  const textInputRef = useRef<HTMLInputElement>(null);

  function todoSubmitHandler(event: React.FormEvent) {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    onAddTodo(enteredText);
  }
  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-container">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
}
