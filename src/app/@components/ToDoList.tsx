import { ITask } from "@/types/Tasks";
import React, { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import { Task } from "./Task";

const ToDoList = () => {

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Tast</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* {tasks.map((task) => (
            <Task key={task.id} task={task}></Task>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};
export default ToDoList;
