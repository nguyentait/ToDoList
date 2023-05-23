
'use client'
import AddTask from "./@components/AddTask";
// import ToDoList from './@components/ToDoList';
import { useRouter } from "next/navigation";

import React, { use } from "react";
import { useState, createContext, useContext } from "react";
import { Task } from "./@components/Task";
import { ThemeContext, AuthContext, TasksContext, User } from "./Context/store";
import { getAllTodos } from "./api";
import ToDoList from "./@components/ToDoList";

async function getData() {
  const baseUrl = "http://localhost:3001/tasks";
  const res = await fetch(baseUrl);

  return res.json();
}


export default async function Home() {
  const [theme, setTheme] = useState("dark");
  console.log("hello" +Date.now())
  let u: User = { name: "Taylor" };
  const [currentUser, setCurrentUser] = useState(u);
  const tasks = [
    {
      "id":"1",
    "text":"a",
    },
    {
      "id":"2",
    "text":"b",
    },
    {
      "id":"3",
    "text":"c",
    },
    {
      "id":"4",
    "text":"d",
    },
  ]
  // const tasks = getData();

  return (
    <>
      <TasksContext.Provider value={tasks}>
        <ThemeContext.Provider value={theme}>
          <AuthContext.Provider value={currentUser}>
            <Page />
            <ToDoList></ToDoList>
          </AuthContext.Provider>
        </ThemeContext.Provider>
      </TasksContext.Provider>
    </>
  );
}

function Button() {
  const theme = useContext(ThemeContext);
  return (
    <>
      <button>{theme}</button>
    </>
  );
}
function Profile() {
  const currentUser = useContext(AuthContext);
  const t = useContext(TasksContext);

  return <h1>{currentUser.name}</h1>;
}
function Page() {
  console.log("page")
  return (
    <>
    <h1>Hello world</h1>
      <Button />
      <Profile />
    </>
  );
}


// function ToDoList() {
//   // const tasks = useContext(TasksContext);
//   // console.log(tasks.length)
//   return (
//     <>
//     <table>
//         <thead>
//           <tr>
//             <th>Tast</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
        
          
//         </tbody>
//       </table>
//     </>
//   );
// };