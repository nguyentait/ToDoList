// import React from 'react'
// import { ITask } from "@/types/T=tasks";
// interface TasktProps {
//     task: ITask

import { ITask } from "@/types/Tasks"

export const Task = ({task:Task}) => {
  return (
    <tr>
        <th>{task.id}</th>
        <td>{task.text}</td>

    </tr>
    )
}
