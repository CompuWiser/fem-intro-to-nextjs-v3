import { Todo as TodoType } from "@prisma/client";
import Todo from "./Todo";

const TodoList = ({ todos }: { todos: TodoType[] }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
