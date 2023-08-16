import db from "@/utils/db";
import { NextResponse } from "next/server";

type Resp = Response & { params: { id: string } };

export const GET = async (request: Request, response: Resp) => {
  const data = await db.todo.findUnique({ where: { id: response.params.id } });
  return NextResponse.json({ data });
};

export const DELETE = async (request: Request, response: Resp) => {
  const todo = await db.todo.delete({ where: { id: response.params.id } });
  return NextResponse.json({ data: todo });
};
