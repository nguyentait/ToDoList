"use client";
import {getAllTodos} from '../api'

export interface User {
  name: string;
}

const currentUser: User = { name: "default" };
import { createContext } from "react";
export const ThemeContext = createContext("light");
export const AuthContext = createContext(currentUser);

const tasks = getAllTodos();
export const TasksContext = createContext(tasks);