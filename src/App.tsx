import { TodoList } from "./compontents/TodoList";
import { NewTodo } from "./compontents/NewTodo";
import { useState } from "react";
import { Todo } from "./compontents/todo.model";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: crypto.randomUUID(), text: text }];
    });
  };

  function todoDeleteHandler(todoId: string) {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  }

  return (
    <>
      <div className="App">
        <NewTodo onAddTodo={todoAddHandler} />
        <TodoList todos={todos} onDeleteTodo={todoDeleteHandler} />
      </div>
    </>
  );
}

export default App;
