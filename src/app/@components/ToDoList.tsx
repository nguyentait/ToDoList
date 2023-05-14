import { ITask } from "@/types/Tasks";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Task } from "./Task";
interface TodoListProps {
    tasks: ITask[]
}
const ToDoList: React.FC<TodoListProps> = ({ tasks }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Tast</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map(task => (
                        // <tr key={task.id}>
                        //     <th>{task.id}</th>
                        //     <td>{task.text}</td>
                        // </tr>)
                        <Task key={task.id} task={task}></Task>

                    ))
                    }


                </tbody>
            </table>
        </div>
    );
}
export default ToDoList;