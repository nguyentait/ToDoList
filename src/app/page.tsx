
'use client';
import AddTask from './@components/AddTask';
import ToDoList from './@components/ToDoList';
import  {useRouter} from 'next/navigation'
import { getAllTodos } from './api';
export default async function Home() {
  const router = useRouter();

  const tasks = await getAllTodos();
  console.log(tasks)
  return (
    <>
     <main className='max-w-4xl mx-auto bg-red-400 mt-4'>
      <div className='text-center my-5 flex flex-col grap-4'>
        <h1 className='text-2xl font-bold'>TodoList App</h1>
        <AddTask></AddTask>
        <ToDoList tasks={tasks}/>
      </div>
     </main>
    </>
  )
}
