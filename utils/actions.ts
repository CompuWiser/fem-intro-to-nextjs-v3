"use server";

import db from "@/utils/db";
import { revalidatePath } from "next/cache";

export const newTodo = async (formData: FormData) => {
  const newTodo = formData.get("todo") as string;

  if (newTodo) {
    await db.todo.create({
      data: {
        content: newTodo,
      },
    });
    revalidatePath("/todos");
  }
};

export const completeTodo = async (todoId: string) => {
  await db.todo.update({
    where: { id: todoId },
    data: {
      completed: true,
    },
  });
  revalidatePath("/todos");
};
