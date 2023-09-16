import type { Todo as TodoType } from "@prisma/client";
import type { FC, PropsWithoutRef } from "react";
import Todo from "./Todo";

type TodoListFC = FC<PropsWithoutRef<{ todos: TodoType[] }>>;

const TodoList: TodoListFC = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
