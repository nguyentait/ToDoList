
'use client';
import AddTask from './@components/AddTask';
// import ToDoList from './@components/ToDoList';
import  {useRouter} from 'next/navigation'

import React from "react";
import {useState, createContext, useContext} from "react";
import { Task } from "./@components/Task";
import { ThemeContext, AuthContext, TasksContext, User } from './Context/store';
import {getAllTodos} from './api'




async function getData() {
  const baseUrl = 'http://localhost:3001';
  const res = await fetch(baseUrl);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}
const dataResponse = getData();


export default async function Home() {


  const [theme, setTheme] = useState('dark');
  
  let u:User =  {name: 'Taylor' }
  const [currentUser, setCurrentUser] = useState(u);


  return <>
    <TasksContext.Provider value={[]}>
     <ThemeContext.Provider value={theme}>
      <AuthContext.Provider value={currentUser}>
        <Page />
      </AuthContext.Provider>
    </ThemeContext.Provider>
    </TasksContext.Provider>
  </>
};

function Button(){
  const theme = useContext(ThemeContext);
  return <>
    <button>
      {theme}
    </button>
  </>
}
function Profile(){
  const currentUser = useContext(AuthContext);
  const t = useContext(TasksContext);
  // console.log(t);
  return <h1>
    {currentUser.name}
  </h1>
}
function Page(){
  return <>
    <Button/>
    <Profile/>
  </>
}