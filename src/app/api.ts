import { ITask } from "@/types/Tasks";

const baseUrl = 'http://localhost:3001';
export const getAllTodos = async (): Promise<ITask[]>=>{
    const res = await fetch(`${baseUrl}/tasks`);
    const todos = await res.json();
    return todos;
}