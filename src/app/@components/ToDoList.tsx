
import { ITask } from "@/types/Tasks";
import { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import { Task } from "./Task";
import { TasksContext } from "../Context/store";

export default function ToDoList() {
  const tasks = useContext(TasksContext);
  
  return (
    <>
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Tast</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task key={task.id} task={task}></Task>
          ))}
        </tbody>
      </table>
    </div></>
  );
};

